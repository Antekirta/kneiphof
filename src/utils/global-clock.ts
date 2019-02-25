'use strict';

import {TIME} from "@/registry/TIME";
import {EVENTS} from "@/registry/EVENTS";
import {store} from "@/store/store";
import {eventBus} from "@/utils/event-bus";
import {SET_DAY, SET_HOUR, SET_MONTH, SET_WEEK, SET_YEAR} from "@/store/actions/actions";

class GlobalClock {
    private hoursPassed = 0;

    constructor() {
        this.init();
    }

    init(): void {
        this.countTime();
    }

    countTime(): void {
        setInterval(() => {
            if (!window.pause) {
                this.hoursPassed++;

                store.dispatch({type: SET_HOUR.type, value: this.hoursPassed});
                store.dispatch({type: SET_DAY.type, value: this.daySinceStart()});
                store.dispatch({type: SET_WEEK.type, value: this.weekSinceStart()});
                store.dispatch({type: SET_MONTH.type, value: this.monthsSinceStart()});
                store.dispatch({type: SET_YEAR.type, value: this.yearsSinceStart()});

                eventBus.emit(EVENTS.CUSTOM.TIME.HOUR_PASSED);
                
                if (this.hoursPassed % 6 === 0) {
                    eventBus.emit(EVENTS.CUSTOM.TIME.SIX_HOURS_PASSED);
                }
            }
        }, 1000)
    }

    daySinceStart(): number {
        return Math.floor(this.hoursPassed / (TIME.HOURS_IN_DAY + 1));
    }

    weekSinceStart(): number {
        return Math.floor(this.daySinceStart() / (TIME.DAYS_IN_WEEK + 1));
    }

    monthsSinceStart(): number {
        return Math.floor(this.weekSinceStart() / (TIME.WEEKS_IN_MONTH + 1));
    }

    yearsSinceStart(): number {
        return Math.floor(this.monthsSinceStart() / (TIME.MONTHS_IN_YEAR + 1));
    }
}

const globalClock = new GlobalClock();

export {globalClock};
