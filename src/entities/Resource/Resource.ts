'use strict';

class Resource {
    constructor(public type: string) {

    }

    static generateWood(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource('wood');
        });
    }

    static generateClay(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource('clay');
        });
    }

    static generateStone(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource('stone');
        });
    }

    static generateIron(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource('iron');
        });
    }

    static generateAmber(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource('amber');
        });
    }

    static generateFur(amount: number) {
        return [...Array(amount)].map(() => {
            return new Resource('fur');
        });
    }
}

export {Resource};