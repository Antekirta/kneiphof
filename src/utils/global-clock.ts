/**
 * Singleton
 */

import {_TIME_STORE_} from '@/store/time_store'
import {TIME} from '@/registry/TIME/TIME'
import {EVENTS} from '@/registry/EVENTS'
import {eventBus} from '@/utils/event-bus'

let hoursOfDay = 0

class GlobalClock {
    private hoursPassed = 0

    constructor() {
        this.countTime();
    }

    private countTime(): void {
        setInterval(() => {
            if (!window.pause) {
                this.hoursPassed++
                
                this.emitTimeOfDay()
                
                this.calculateCurrentDate()
            }
        }, 500)
    }
    
    calculateCurrentDate () {
        const hoursInYear = 8640
        const hoursInMonth = 720
        const hoursInWeek = 168
        const hoursInDay = 24
        
        const year = Math.floor(this.hoursPassed / hoursInYear)
        const month = Math.floor((this.hoursPassed - hoursInYear * year) / hoursInMonth)
        const week = Math.floor((this.hoursPassed - hoursInYear * year - hoursInMonth * month) / hoursInWeek)
        const day = Math.floor((this.hoursPassed - hoursInYear * year - hoursInMonth * month - hoursInWeek * week) / hoursInDay)
        
        if (_TIME_STORE_.CURRENT.YEAR !== year) {
            eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.YEAR_PASSED)
        }
        
        if (month % 6 === 0) {
            eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.SIX_MONTH_PASSED)
        }

        if (month % 3 === 0) {
            eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.THREE_MONTHS_PASSED)
        }

        if (_TIME_STORE_.CURRENT.MONTH !== month) {
            eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.MONTH_PASSED)
        }

        if (_TIME_STORE_.CURRENT.DAY !== day) {
            eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.DAY_PASSED)
        }
        
        _TIME_STORE_.CURRENT.YEAR = year
        _TIME_STORE_.CURRENT.MONTH = month
        _TIME_STORE_.CURRENT.WEEK = week
        _TIME_STORE_.CURRENT.DAY = day
    }
    
    emitTimeOfDay () {
        hoursOfDay++

        eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED)

        if (hoursOfDay % 6 === 0) {
            eventBus.emit(EVENTS.CUSTOM.GLOBAL_CLOCK.SIX_HOURS_PASSED)
        }
        
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

        if (hoursOfDay === 24) {
            hoursOfDay = 0
        }
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
}

const globalClock = new GlobalClock();

export {globalClock};
