'use strict';

const EVENTS = {
    ELEM: {
        CLICK: 'click',
    },

    CUSTOM: {
        FOOD: {
            REMOVE: 'food-remove',

            PRODUCE: 'produce-food'
        },

        PERSON: {
            DIED: 'person-died',

            REQUEST_FOR_FOOD: 'request-for-food'
        },

        RESOURCE: {
            PRODUCE: 'resource-produce'
        },

        TIME: {
            HOUR_PASSED: 'hour-passed',

            SIX_HOURS_PASSED: 'six-hours-passed'
        }
    }
};

export {EVENTS};