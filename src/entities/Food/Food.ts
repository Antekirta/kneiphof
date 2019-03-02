import {generateId} from '@/utils/generate-id'
import {putInStorage, removeFromStorage} from '@/utils/storage-utils'

import {eventBus} from '@/utils/event-bus'
import {EVENTS} from '@/registry/EVENTS';
import {FOOD} from '@/registry/FOOD/FOOD'
import {_FOOD_STORE_} from '@/store/food_store'

class Food {
    public id: string = generateId('Food')
    private hoursExpired: number = 0
    private unbindEvent: any

    constructor(public name: string,
                public calories: number,
                public value: number,
                // shelf life in hours
                public shelfLife: number) {
        this.name = this.name.toUpperCase()
        
        putInStorage(_FOOD_STORE_[this.name], this.id)

        this.unbindEvent = eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED, () => {
            this.hoursExpired++
            
            if (this.hoursExpired >= this.shelfLife) {
                this.rot()
            }
        })
    }

    rot() {
        removeFromStorage(_FOOD_STORE_[this.name], this.id)

        console.log(`${this.name} has rotten!`)

        this.unbindEvent()
    }
    
    static createBeef () {
        return new Food(FOOD.BEEF, 2000, 10, 2)
    }
}

export {Food}