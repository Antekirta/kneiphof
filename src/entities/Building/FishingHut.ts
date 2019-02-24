'use strict';

import {store} from '@/store/store';

import {Building} from '@/entities/Building/Building';
import {Food} from '@/entities/Food/Food';
import {eventBus} from '@/utils/event-bus';
import {EVENTS} from '@/registry/EVENTS';

class FishingHut extends Building {
    constructor(public name: string,
                private productivity: number) {
        super(name);

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
            const production = Food.produceFish(this.productivity);

            eventBus.emit(EVENTS.CUSTOM.FOOD.PRODUCE, production);
        }
    }
}

export {FishingHut}