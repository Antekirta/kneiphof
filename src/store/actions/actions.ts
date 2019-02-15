'use strict';

export interface IAction {
    type: string,

    [key: string]: any
}

export const SET_HOUR: IAction = {
    type: 'SET_HOUR',
    value: 0
};

export const SET_DAY: IAction = {
    type: 'SET_DAY',
    value: 0
};

export const SET_WEEK: IAction = {
    type: 'SET_WEEK',
    value: 0
};

export const SET_MONTH: IAction = {
    type: 'SET_MONTH',
    value: 0
};

export const SET_YEAR: IAction = {
    type: 'SET_YEAR',
    value: 0
};

export const SET_POPULATION: IAction = {
    type: 'SET_POPULATION',
    population: []
};

export const FILL_FOOD_STORAGE: IAction = {
    type: 'FILL_FOOD_STORAGE',
    food: []
};

export const SET_RESOURCE_STORAGE: IAction = {
    type: 'SET_RESOURCE_STORAGE',
    resources: []
};
