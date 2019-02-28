'use strict';

import {Building} from '@/entities/Building/Building';
import {eventBus} from '@/utils/event-bus';
import {EVENTS} from '@/registry/EVENTS';
import {Resource} from '@/entities/Resource/Resource';
import {RESOURCES} from '@/registry/RESOURCES';
import {store} from '@/store/store';

class Sawmill extends Building {
    constructor(public name: string,
                private productivity: number = 1) {
        super(name, {width: 5, height: 5}, {x: 50, y: 70});

        this.init();
    }

    private init() {        
        eventBus.on(EVENTS.CUSTOM.TIME.SIX_HOURS_PASSED, this.produce.bind(this));
    }

    public startUsing(): void {
        this.isUsed = true;
    }

    public stopUsing(): void {
        this.isUsed = false;
    }

    public produce() {
        if (this.isUsed) {
            const production = Resource.generateWood(1);
            
            eventBus.emit(EVENTS.CUSTOM.RESOURCE.PRODUCE, production, RESOURCES.WOOD);
        }
    }
}

export {Sawmill};