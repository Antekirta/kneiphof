'use strict';

import {EVENTS} from '@/registry/EVENTS';
import {eventBus} from '@/utils/event-bus';

interface IBuildingSize {
    width: number,

    height: number
}

interface IBuildingCoords {
    x: number,

    y: number
}

abstract class Building {
    protected isUsed: boolean = false;

    constructor(public name: string, public size: IBuildingSize, public coords: IBuildingCoords) {
        eventBus.emit(EVENTS.CUSTOM.BUILDING.ERECTED, {
            buildingName: this.name,

            size: this.size,

            coords: this.coords
        });
    }
}

export {Building};