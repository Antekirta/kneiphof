import {generateId} from '@/utils/generate-id';
import {putInStorage, removeFromStorage} from '@/utils/storage-utils';

import {FOOD} from '@/registry/FOOD/FOOD'
import {_FOOD_STORE_} from '@/store/food_store';

class Food {
    public id: string = generateId('Food')

    constructor(public name: string,
                public calories: number,
                public value: number,
                // shelf life in days
                public shelfLife: number) {
        putInStorage(_FOOD_STORE_[this.name], this.id)

        setTimeout(this.rot, this.shelfLife)
    }

    rot() {
        removeFromStorage(_FOOD_STORE_[this.name], this.id)

        console.log(`${this.name} has rotten!`);
    }
    
    static [FOOD.BEEF] () {
        return new Food(FOOD.BEEF, 2000, 10, 2)
    }
}