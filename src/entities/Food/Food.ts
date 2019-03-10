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

        putInStorage(_FOOD_STORE_[this.name], this)

        this.unbindEvent = eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED, () => {
            this.hoursExpired++

            if (this.hoursExpired >= this.shelfLife) {
                if (Math.random() > 0.3) {
                    this.rot()   
                }
            }
        })
    }

    consume(): number {
        this.remove()

        return this.calories
    }

    remove() {
        removeFromStorage(_FOOD_STORE_[this.name], this)

        this.unbindEvent()
    }

    rot() {
        this.remove()
    }

    static createBeef() {
        return new Food(FOOD.BEEF.value, 3000, 20, 48)
    }

    static createDeerMeat() {
        return new Food(FOOD.DEER_MEAT.value, 2000, 10, 72) 
    }
}

export {Food}