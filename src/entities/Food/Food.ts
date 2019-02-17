'use strict';

const uniqid = require('uniqid');

import {eventBus} from '@/utils/event-bus';
import {EVENTS} from '@/registry/EVENTS';
import {FOOD} from '@/registry/FOOD';

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
            return new Food(FOOD.MEAT, 1000, 5, 0);
        });
    }

    static produceFish(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food(FOOD.FISH, 500, 3, 1);
        });
    }

    static produceTurnip(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food(FOOD.TURNIP, 200, 1, 2);
        });
    }

    static produceWheat(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food(FOOD.WHEAT, 10, 2, 100);
        });
    }

    static produceFlour(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food(FOOD.FLOUR, 10, 5, 99);
        });
    }

    static produceBread(amount?: number) {
        return [...Array(amount)].map(item => {
            return new Food(FOOD.BREAD, 1000, 10, 2);
        });
    }
}

export {Food};