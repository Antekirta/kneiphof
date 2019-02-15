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

    tribePopulation: Person[],
    foodStorage: Food[],
    resourceStorage: Resource[]
}

export {IState};