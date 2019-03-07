/**
 * Singleton
 */

import {_TIME_STORE_} from '@/store/time_store'
import {TIME} from '@/registry/TIME/TIME'
import {EVENTS} from '@/registry/EVENTS'
import {eventBus} from '@/utils/event-bus'

let hoursOfDay = 0

class GlobalClock {
    public hoursPassed = 0

    constructor() {
        this.countTime();
    }

    private countTime(): void {
        setInterval(() => {
            if (!window.pause) {
                this.hoursPassed++
                hoursOfDay++
                
                eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED)
                
                if (hoursOfDay % 6 === 0) {
                    eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.SIX_HOURS_PASSED)
                }
                                
                this.emitTimeOfDay(hoursOfDay)
                
                this.emitSeason()
                
                if (hoursOfDay === 24) {
                    hoursOfDay = 0
                }
            }
        }, 500)
    }
    
    emitTimeOfDay (hoursOfDay: number) {
        let timeOfDay = TIME.TIMES_OF_DAY.NIGHT

        if (hoursOfDay < 5) {
            timeOfDay = TIME.TIMES_OF_DAY.NIGHT
        } else if (hoursOfDay < 12) {
            timeOfDay = TIME.TIMES_OF_DAY.MORNING
        } else if (hoursOfDay < 18) {
            timeOfDay = TIME.TIMES_OF_DAY.DAY
        } else if (hoursOfDay < 22) {
            timeOfDay = TIME.TIMES_OF_DAY.EVENING
        }

        eventBus.emit(EVENTS.CUSTOM.TIME_OF_DAY, timeOfDay)
    }
    
    emitSeason () {
        if (this.hoursPassed >= TIME.HOURS_IN_SEASON) {
            if (_TIME_STORE_.SEASON.value === TIME.SEASON.WINTER.value) {
                _TIME_STORE_.SEASON = TIME.SEASON.SPRING
            } else if (_TIME_STORE_.SEASON.value === TIME.SEASON.SPRING.value) {
                _TIME_STORE_.SEASON = TIME.SEASON.SUMMER
            } else if (_TIME_STORE_.SEASON.value === TIME.SEASON.SUMMER.value) {
                _TIME_STORE_.SEASON = TIME.SEASON.AUTUMN
            } else {
                _TIME_STORE_.SEASON = TIME.SEASON.WINTER
            }

            this.hoursPassed = 0
            
            eventBus.emit(EVENTS.CUSTOM.SEASON_CHANGED)
        }
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
