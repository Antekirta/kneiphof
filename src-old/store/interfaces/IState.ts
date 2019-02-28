'use strict';

import {Food} from '@/entities/Food/Food';
import {Person} from '@/entities/Person/Person';
import {Resource} from '@/entities/Resource/Resource';

interface IState {
    year: number,
    month: number,
    week: number,
    day: number,
    hour: number,

    population: Person[],

    resources: {
        [key: string]: Resource[]
    },
    
    food: {
        [key: string]: Food[]
    }
}

export {IState};