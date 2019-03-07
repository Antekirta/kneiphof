'use strict';

const EVENTS = {
    ELEM: {
        CLICK: 'click',
    },

    CUSTOM: {
        GLOBAL_CLOCK: {
            HOUR_PASSED: 'hour-passed',

            SIX_HOURS_PASSED: 'six-hours-passed',
        },

        TIME_OF_DAY: 'time-of-day',

        SEASON_CHANGED: 'season-changed',

        WORLD_EVENT: 'world-event'
    }
};

export {EVENTS};