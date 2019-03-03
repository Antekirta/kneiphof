import {putInStorage, removeFromStorage} from '@/utils/storage-utils';

import {Mammal} from '@/entities/Being/Mammal'

import {_PEOPLE_STORE_} from '@/store/people-store';
import {FOOD} from '@/registry/FOOD/FOOD';
import {PROFESSIONS} from '@/registry/PROFESSIONS/PROFESSIONS';

interface IProfessions {
    // profession: skillPoints
    [index: string]: number
}

class Person extends Mammal {
    constructor(name: string, public professions: IProfessions) {
        super(name, 'human',
            70, 1, 1.7, 100,
            25, 5, 200,
            2, 'none', 0,
            'omnivorous', Object.keys(FOOD).map(key => FOOD[key].value))
    }
    
    addInStorage () {
        putInStorage(_PEOPLE_STORE_, this)
    }

    protected die() {
        this.unbindEvent()

        removeFromStorage(_PEOPLE_STORE_, this)

        console.log(`${this.name} the man is dead`)
    }

    hasProfession(profession: string, skillLimit: number = 1) {
        return this.professions[profession] > skillLimit
    }
}

export {Person}