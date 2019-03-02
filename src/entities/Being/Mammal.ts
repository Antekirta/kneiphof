import {generateId} from '@/utils/generate-id';
import {putInStorage, removeFromStorage} from '@/utils/storage-utils';

import {eventBus} from '@/utils/event-bus';
import {EVENTS} from '@/registry/EVENTS';
import {MAMMALS} from '@/registry/BEINGS/MAMMALS';
import {_BEINGS_STORE_} from '@/store/beings_store';

type furType = 'thin' | 'thick' | 'none'
type dietType = 'predator' | 'herbivore' | 'omnivorous'

class Mammal {
    public id: string = generateId('Mammal')
    private calories: number = 2000

    constructor(private name: string,
                private species: string,
                private weight: number, // kg
                private width: number, // m
                private height: number, // m
                private caloriesPerHour: number,
                private maxSpeed: number, // km per hour
                private normalSpeed: number, // km per hour
                private strength: number, // kilograms count to move

                private legsCount: number,
                private fur: furType,
                private horns: number,
                private dietType: dietType) {
        this.species = this.species.toUpperCase()
        
        putInStorage(_BEINGS_STORE_[this.species], this.id)
        
        eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED, this.controlCalories.bind(this))
    }
    
    private controlCalories () {
        this.calories -= this.caloriesPerHour
        
        if (this.calories < 0) {
            this.findFood()
        }
        
        if (this.calories <= - 500) {
            if (this.strength > 0) {
                this.strength--
            }
        }
        
        if (this.calories <= -1000) {
            this.die()
        }
    }
    
    private findFood () {
        console.log(`${this.name} the ${this.species} is trying to get some food`)
    }
    
    private die () {
        removeFromStorage(_BEINGS_STORE_[this.species], this.id)
        
        console.log(`${this.name} the ${this.species} is dead`)
    }
    
    static [MAMMALS.DOG](name: string) {
        return new Mammal(
            name,
            MAMMALS.DOG,

            30,
            0.4,
            0.6,
            75,

            40,
            10,
            150,

            4,
            'thin',
            0,

            'predator'
        )
    }
}

export {Mammal}