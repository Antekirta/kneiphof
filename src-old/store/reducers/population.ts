'use strict';

import ACTIONS from '../actions/population'

const ANY_ACTIONS: any = ACTIONS

const reducers: any = {};

Object.keys(ACTIONS).forEach(key => {
    reducers[key] = (state: number = 0, action: any) => {
        if (action.type === ANY_ACTIONS[key].type) {
            return action.value || state;
        }

        return state;
    }
})

export default reducers