'use strict';

import {createStore, combineReducers} from 'redux';

import timeReducers from './reducers/time'
import foodReducers from './reducers/food'
import resourcesReducers from './reducers/resources'
import populationReducers from './reducers/population'

import {IState} from '@/store/interfaces/IState';
import {RESOURCES} from '@/registry/RESOURCES';
import {FOOD} from '@/registry/FOOD';

const initialState: IState = {
    year: 0,
    month: 0,
    week: 0,
    day: 0,
    hour: 0,

    population: [],

    [RESOURCES.WOOD]: [],
    [RESOURCES.CLAY]: [],
    [RESOURCES.STONE]: [],
    [RESOURCES.IRON]: [],
    [RESOURCES.AMBER]: [],
    [RESOURCES.FUR]: [],

    [FOOD.MEAT]: [],
    [FOOD.FISH]: [],
    [FOOD.TURNIP]: [],
    [FOOD.WHEAT]: [],
    [FOOD.FLOUR]: [],
    [FOOD.BREAD]: [],
};

const reducers = {...timeReducers, ...foodReducers, ...resourcesReducers, ...populationReducers};

const reducer = combineReducers<any>(reducers);

let store = createStore(reducer as any, initialState as any);

// store.subscribe(() => {
//     const state = store.getState() as IState;
//
//     console.log('tribePopulation: ', state.tribePopulation);
//     console.log('=================================');
// });

export {store};