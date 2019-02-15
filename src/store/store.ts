'use strict';

import {createStore, combineReducers} from 'redux';
import * as reducers from './reducers/reducers';
import {IState} from "@/store/interfaces/IState";

const initialState: IState = {
    year: 0,
    month: 0,
    week: 0,
    day: 0,
    hour: 0,

    tribePopulation: [],

    foodStorage: [],

    resourceStorage: []
};

const reducer = combineReducers<any>(reducers);

let store = createStore(reducer as any, initialState as any);

// store.subscribe(() => {
//     const state = store.getState() as IState;
//
//     console.log('tribePopulation: ', state.tribePopulation);
//     console.log('=================================');
// });

export {store};