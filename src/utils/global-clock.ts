/**
 * Singleton
 */

import {TIME} from '@/registry/TIME/TIME';
import {EVENTS} from '@/registry/EVENTS';
import {eventBus} from '@/utils/event-bus';

class GlobalClock {
    public hoursPassed = 0

    constructor() {
        this.countTime();
    }

    private countTime(): void {
        setInterval(() => {
            if (!window.pause) {
                this.hoursPassed++;
                
                eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED)
                
                if (this.hoursPassed % 6 === 0) {
                    eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.SIX_HOURS_PASSED)
                }
            }
        }, 5000)
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
