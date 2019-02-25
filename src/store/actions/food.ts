'use strict'

import {IAction} from '@/store/actions/IAction';
import {FOOD} from '@/registry/FOOD';

export default {
    [FOOD.MEAT]: <IAction> {
        type: FOOD.MEAT,
        value: 0
    },

    [FOOD.FISH]: <IAction> {
        type: FOOD.FISH,
        value: 0
    },

    [FOOD.TURNIP]: <IAction> {
        type: FOOD.TURNIP,
        value: 0
    },

    [FOOD.WHEAT]: <IAction> {
        type: FOOD.WHEAT,
        value: 0
    },

    [FOOD.FLOUR]: <IAction> {
        type: FOOD.FLOUR,
        value: 0
    },

    [FOOD.BREAD]: <IAction> {
        type: FOOD.BREAD,
        value: 0
    }
}