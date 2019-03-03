import {putInStorage} from '@/utils/storage-utils';

import {Building} from '@/entities/Building/Building';
import {_FOOD_STORE_} from '@/store/food_store';
import {FOOD} from '@/registry/FOOD/FOOD';
import {PROFESSIONS} from '@/registry/PROFESSIONS/PROFESSIONS';

import {Food} from '@/entities/Food/Food';

class HuntingHut extends Building {
    constructor() {
        super(1, {
            [PROFESSIONS.HUNTER.value]: 1
        })
    }

    protected produce() {
        for (let i = 0; i < this.productivity; i++) {
            if (Math.random() > 0.2) {
                putInStorage(_FOOD_STORE_[FOOD.DEER_MEAT.value], Food.createDeerMeat())
            }
        }
    }
}

export {HuntingHut}