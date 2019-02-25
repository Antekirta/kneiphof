'use strict'

import {IAction} from '@/store/actions/IAction'
import {RESOURCES} from '@/registry/RESOURCES'

export default {
    resources: <IAction> {
        type: 'resources',
        value: 0
    },

    [RESOURCES.WOOD]: <IAction> {
        type: RESOURCES.WOOD,
        value: 0
    },

    [RESOURCES.CLAY]: <IAction> {
        type: RESOURCES.CLAY,
        value: 0
    },

    [RESOURCES.STONE]: <IAction> {
        type: RESOURCES.STONE,
        value: 0
    },

    [RESOURCES.IRON]: <IAction> {
        type: RESOURCES.IRON,
        value: 0
    },

    [RESOURCES.FUR]: <IAction> {
        type: RESOURCES.FUR,
        value: 0
    },

    [RESOURCES.AMBER]: <IAction> {
        type: RESOURCES.AMBER,
        value: 0
    }
}