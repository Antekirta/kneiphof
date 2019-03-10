import {putInStorage} from '@/utils/storage-utils';

import {Building} from '@/entities/Building/Building'
import {_FOOD_STORE_} from '@/store/food_store'
import {FOOD} from '@/registry/FOOD/FOOD'
import {PROFESSIONS} from '@/registry/PROFESSIONS/PROFESSIONS'

import {WEATHER} from '@/registry/WEATHER/WEATHER'
import {_WEATHER_STORE_} from '@/store/weather_store'
import {TIME} from '@/registry/TIME/TIME'
import {_TIME_STORE_} from '@/store/time_store'

import {Food} from '@/entities/Food/Food';

class HuntingHut extends Building {
    public name = 'Хижина охотника'
    
    constructor() {
        super(1, {
            [PROFESSIONS.HUNTER.value]: 1
        })
        
        this.production.push(FOOD.BEEF.label)
    }

    protected produce() {
        for (let i = 0; i < this.productivity; i++) {
            if (Math.random() > 0.2) {
                putInStorage(_FOOD_STORE_[FOOD.DEER_MEAT.value], Food.createDeerMeat())
            }
        }
    }

    private isSucceed (): boolean {
       let baseProbability = 0.5
        
        if (_WEATHER_STORE_.WIND_STRENGTH.value === WEATHER.WIND_STRENGTH.HURRICANE.value) {
           baseProbability -= 0.2
        }

        if (_WEATHER_STORE_.WIND_STRENGTH.value === WEATHER.WIND_STRENGTH.STRONG.value) {
            baseProbability -= 0.1
        }

        if (_WEATHER_STORE_.PRECIPITATION.value === WEATHER.PRECIPITATION.HAIL.value) {
            baseProbability -= 0.2
        }

        if (_WEATHER_STORE_.PRECIPITATION.value === WEATHER.PRECIPITATION.BLIZZARD.value) {
            baseProbability -= 0.1
        }

        if (_WEATHER_STORE_.PRECIPITATION.value === WEATHER.PRECIPITATION.SNOW.value) {
            baseProbability -= 0.1
        }

        if (_WEATHER_STORE_.PRECIPITATION.value === WEATHER.PRECIPITATION.SHOWER.value) {
            baseProbability -= 0.1
        }

        if (_WEATHER_STORE_.TEMPERATURE.value === WEATHER.TEMPERATURE.WARM.value) {
            baseProbability += 0.1
        }

        if (_WEATHER_STORE_.TEMPERATURE.value === WEATHER.TEMPERATURE.MILD.value) {
            baseProbability += 0.1
        }
        
        console.log('baseProbability: ', baseProbability)
        
        return Math.random() > (1 - baseProbability)
    }
}

export {HuntingHut}