'use strict';

abstract class Building {
    protected isUsed: boolean = false;
    
    constructor(public name: string) {
    }
}

export {Building};