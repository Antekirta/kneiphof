'use strict';

import ACTIONS from '../actions/resources'

const reducers: any = {};

Object.keys(ACTIONS).forEach(key => {
    reducers[key] = (state: number = 0, action: any) => {
        if (action.type === ACTIONS[key].type) {
            return action.value || state;
        }

        return state;
    }
})

export default reducers