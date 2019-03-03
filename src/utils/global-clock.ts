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
                
                let timeOfDay = TIME.TIMES_OF_DAY.NIGHT
                
                if (this.hoursPassed < 5) {
                    timeOfDay = TIME.TIMES_OF_DAY.NIGHT
                } else if (this.hoursPassed < 12) {
                    timeOfDay = TIME.TIMES_OF_DAY.MORNING
                } else if (this.hoursPassed < 18) {
                    timeOfDay = TIME.TIMES_OF_DAY.DAY
                } else if (this.hoursPassed < 22) {
                    timeOfDay = TIME.TIMES_OF_DAY.EVENING
                }
                
                eventBus.emit(EVENTS.CUSTOM.TIME_OF_DAY, timeOfDay)
                
                if (this.hoursPassed === 24) {
                    this.hoursPassed = 0
                }
            }
        }, 500)
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
