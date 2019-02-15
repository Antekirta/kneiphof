'use strict';

import * as ACTIONS from '@/store/actions/actions';

export function hour(state: number = 0, action: any) {
    if (action.type === ACTIONS.SET_HOUR.type) {
        return action.value || state;
    }

    return state;
}

export function day(state: number = 0, action: any) {
    if (action.type === ACTIONS.SET_DAY.type) {
        return action.value || state;
    }

    return state;
}

export function week(state: number = 0, action: any) {
    if (action.type === ACTIONS.SET_WEEK.type) {
        return action.value || state;
    }

    return state;
}

export function month(state: number = 0, action: any) {
    if (action.type === ACTIONS.SET_MONTH.type) {
        return action.value || state;
    }

    return state;
}

export function year(state: number = 0, action: any) {
    if (action.type === ACTIONS.SET_YEAR.type) {
        return action.value || state;
    }

    return state;
}

export function tribePopulation(state: [] = [], action: ACTIONS.IAction) {
    if (action.type === ACTIONS.SET_POPULATION.type) {
        return action.population;
    }

    return state;
}

export function foodStorage(state: [] = [], action: ACTIONS.IAction) {
    if (action.type === ACTIONS.FILL_FOOD_STORAGE.type) {
        return action.food || state;
    }

    return state;
}

export function resourceStorage(state: [] = [], action: ACTIONS.IAction) {
    if (action.type === ACTIONS.SET_RESOURCE_STORAGE.type) {
        return [...state, action.resources];
    }

    return state;
}