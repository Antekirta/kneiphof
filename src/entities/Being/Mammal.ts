import {generateId} from '@/utils/generate-id';
import {putInStorage, removeFromStorage} from '@/utils/storage-utils';

import {eventBus} from '@/utils/event-bus';
import {EVENTS} from '@/registry/EVENTS';
import {MAMMALS} from '@/registry/BEINGS/MAMMALS';
import {_BEINGS_STORE_} from '@/store/beings_store';
import {_FOOD_STORE_} from '@/store/food_store';
import {FOOD} from '@/registry/FOOD/FOOD';

import {Food} from '@/entities/Food/Food';

type furType = 'thin' | 'thick' | 'none'
type dietType = 'predator' | 'herbivore' | 'omnivorous'

class Mammal {
    public id: string = generateId('Mammal')
    private calories: number = 2000
    private unbindEvent: any

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
                private dietType: dietType,
                private foodPreferences: Array<string>) {
        this.species = this.species.toUpperCase()

        putInStorage(_BEINGS_STORE_[this.species], this)

        this.unbindEvent = eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED, this.controlCalories.bind(this))
    }

    private controlCalories() {
        this.calories -= this.caloriesPerHour

        if (this.calories < 0) {
            this.findFood()
        }

        if (this.calories <= -500) {
            if (this.strength > 0) {
                this.strength--
            }
        }

        if (this.calories <= -1000) {
            this.die()
        }
    }

    private findFood() {
        console.log(`${this.name} the ${this.species} is trying to get some food`)
        
        for (let i = 0; i < this.foodPreferences.length; i++) {
            let food = _FOOD_STORE_[this.foodPreferences[i]]
            
            if (food && food.length) {
                let pieceOfFood = food[0]
                
                if (pieceOfFood) {
                    this.eat(pieceOfFood)   
                }
            }
            
            if (this.calories > 1000) {
                break
            }
        }
    }
    
    private eat(pieceOfFood: Food) {
        this.calories += pieceOfFood.consume()
    }

    private die() {
        this.unbindEvent()
        
        removeFromStorage(_BEINGS_STORE_[this.species], this)

        console.log(`${this.name} the ${this.species} is dead`)
    }

    static createDog(name: string) {
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

            'predator',
            [FOOD.BEEF.value, FOOD.CHICKEN.value, FOOD.DEER_MEAT.label, FOOD.HORSE_MEAT.value, FOOD.PORK.value]
        )
    }
}

export {Mammal}