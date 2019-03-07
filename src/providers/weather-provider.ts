const _random = require('lodash/random')

import {eventBus} from '@/utils/event-bus'
import {EVENTS} from '@/registry/EVENTS'

import {_WEATHER_STORE_} from '@/store/weather_store'
import {WEATHER} from '@/registry/WEATHER/WEATHER'

eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.SIX_HOURS_PASSED, () => {
    const currentWeather = winterSet()

    _WEATHER_STORE_.TEMPERATURE = currentWeather.TEMPERATURE
    _WEATHER_STORE_.PRECIPITATION = currentWeather.PRECIPITATION
    _WEATHER_STORE_.WIND_STRENGTH = currentWeather.WIND_STRENGTH
    _WEATHER_STORE_.WIND_DIRECTION = currentWeather.WIND_DIRECTION
})

function winterSet() {
    const temperatures = [WEATHER.TEMPERATURE.FREEZING, WEATHER.TEMPERATURE.COLD, WEATHER.TEMPERATURE.COOL]
    const precipitations = Object.keys(WEATHER.PRECIPITATION).map((key: string) => WEATHER.PRECIPITATION[key])
    const windStrengths = Object.keys(WEATHER.WIND_STRENGTH).map((key: string) => WEATHER.WIND_STRENGTH[key])
    const windDirections = Object.keys(WEATHER.WIND_DIRECTION).map((key: string) => WEATHER.WIND_DIRECTION[key])

    return getRandomMember(temperatures, precipitations, windStrengths, windDirections)
}

function springSet() {
    const temperatures = [WEATHER.TEMPERATURE.COOL, WEATHER.TEMPERATURE.MILD, WEATHER.TEMPERATURE.WARM]
    const precipitations = [WEATHER.PRECIPITATION.HAIL, WEATHER.PRECIPITATION.SHOWER, WEATHER.PRECIPITATION.RAIN, WEATHER.PRECIPITATION.LIGHT_RAIN, WEATHER.PRECIPITATION.DRY]
    const windStrengths = Object.keys(WEATHER.WIND_STRENGTH).map((key: string) => WEATHER.WIND_STRENGTH[key])
    const windDirections = Object.keys(WEATHER.WIND_DIRECTION).map((key: string) => WEATHER.WIND_DIRECTION[key])

    return getRandomMember(temperatures, precipitations, windStrengths, windDirections)
}

function summerSet() {
    const temperatures = [WEATHER.TEMPERATURE.MILD, WEATHER.TEMPERATURE.WARM, WEATHER.TEMPERATURE.HOT]
    const precipitations = [WEATHER.PRECIPITATION.SHOWER, WEATHER.PRECIPITATION.RAIN, WEATHER.PRECIPITATION.LIGHT_RAIN, WEATHER.PRECIPITATION.DRY]
    const windStrengths = Object.keys(WEATHER.WIND_STRENGTH).map((key: string) => WEATHER.WIND_STRENGTH[key])
    const windDirections = Object.keys(WEATHER.WIND_DIRECTION).map((key: string) => WEATHER.WIND_DIRECTION[key])

    return getRandomMember(temperatures, precipitations, windStrengths, windDirections)
}

function autumnSet() {
    const temperatures = [WEATHER.TEMPERATURE.COOL, WEATHER.TEMPERATURE.MILD, WEATHER.TEMPERATURE.WARM]
    const precipitations = [WEATHER.PRECIPITATION.HAIL, WEATHER.PRECIPITATION.SHOWER, WEATHER.PRECIPITATION.RAIN, WEATHER.PRECIPITATION.LIGHT_RAIN, WEATHER.PRECIPITATION.DRY]
    const windStrengths = Object.keys(WEATHER.WIND_STRENGTH).map((key: string) => WEATHER.WIND_STRENGTH[key])
    const windDirections = Object.keys(WEATHER.WIND_DIRECTION).map((key: string) => WEATHER.WIND_DIRECTION[key])

    return getRandomMember(temperatures, precipitations, windStrengths, windDirections)
}

function getRandomMember(temperatures: Array<any>, precipitations: Array<any>, windStrengths: Array<any>, windDirections: Array<any>) {
    return {
        TEMPERATURE: temperatures[_random(0, temperatures.length - 1)],
        PRECIPITATION: precipitations[_random(0, precipitations.length - 1)],
        WIND_STRENGTH: windStrengths[_random(windStrengths.length - 1)],
        WIND_DIRECTION: windDirections[_random(0, windDirections.length - 1)]
    }
}