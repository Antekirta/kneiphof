'use strict';

const uniqid = require('uniqid');

import {eventBus} from '@/utils/event-bus';
import {EVENTS} from '@/registry/EVENTS';

class Food {
    public id: string;

    constructor(public name: string,
                public calories: number = 100,
                public marketValue: number = 1,
                public eatingPriority: number = 0) {
        this.id = this.name + uniqid();
    }

    public removeFood() {
        eventBus.emit(EVENTS.CUSTOM.FOOD.REMOVE, this.id);
    }

    static produceMeat(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food('meat', 1000, 5, 0);
        });
    }

    static produceFish(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food('fish', 500, 3, 1);
        });
    }

    static produceTurnip(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food('turnip', 200, 1, 2);
        });
    }

    static produceWheat(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food('wheat', 10, 2, 100);
        });
    }

    static produceFlour(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food('flour', 10, 5, 99);
        });
    }

    static produceBread(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food('bread', 1000, 10, 2);
        });
    }
}

export {Food};