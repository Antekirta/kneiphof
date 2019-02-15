'use strict';

class Resource {
    constructor(public type: string) {

    }

    static generateWood() {
        return new Resource('wood');
    }

    static generateClay() {
        return new Resource('clay');
    }

    static generateStone() {
        return new Resource('stone');
    }

    static generateIron() {
        return new Resource('amber');
    }

    static generateAmber() {
        return new Resource('clay');
    }

    static generateFur() {
        return new Resource('fur');
    }
}

export {Resource};