'use strict';

import ACTIONS from '../actions/food'

const reducers: any = {
    food(state: number = 0, action: any) {
        if (action.type === ACTIONS['food'].type) {
            return action.value || state;
        }

        return state;
    }
};

Object.keys(ACTIONS).forEach(key => {
    reducers[key] = (state: number = 0, action: any) => {
        if (action.type === ACTIONS[key].type) {
            return action.value || state;
        }

        return state;
    }
})

export default reducers