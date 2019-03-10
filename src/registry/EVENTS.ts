'use strict';

const EVENTS = {
    ELEM: {
        CLICK: 'click',
    },

    CUSTOM: {
        GLOBAL_CLOCK: {
            HOUR_PASSED: 'hour-passed',
            SIX_HOURS_PASSED: 'six-hours-passed',
            DAY_PASSED: 'day-passed',
            WEEK_PASSED: 'week-passed',
            MONTH_PASSED: 'month-passed',
            THREE_MONTHS_PASSED: 'three-months-passed',
            SIX_MONTH_PASSED: 'six-months-passed',
            YEAR_PASSED: 'year-passed',
        },

        TIME_OF_DAY: 'time-of-day',

        SEASON_CHANGED: 'season-changed',

        WORLD_EVENT: 'world-event'
    }
};

export {EVENTS};