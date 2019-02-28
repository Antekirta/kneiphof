'use strict';

import {RESOURCES} from '@/registry/RESOURCES';

class Resource {
    constructor(public type: string) {

    }

    static generateWood(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource(RESOURCES.WOOD);
        });
    }

    static generateClay(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource(RESOURCES.CLAY);
        });
    }

    static generateStone(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource(RESOURCES.STONE);
        });
    }

    static generateIron(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource(RESOURCES.IRON);
        });
    }

    static generateAmber(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource(RESOURCES.AMBER);
        });
    }

    static generateFur(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource(RESOURCES.FUR);
        });
    }
}

export {Resource};