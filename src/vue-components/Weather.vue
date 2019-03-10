<template>
    <div class="weather">
        <header class="weather__header" :class="'weather__header--' + timeOfDay.value.toLowerCase()">
            {{timeOfDay.label}}
        </header>

        <div class="weather__list">
            <div class="weather__item">
                <div class="weather__item-label">
                    {{year}} год,
                    {{month}},
                    {{week}} неделя,
                    {{day}}
                </div>
            </div>

            <div class="weather__item">
                <div class="weather__item-label"><b>{{season.label}}</b></div>
            </div>

            <div class="weather__item">
                <div class="weather__item-label">
                    {{weather.TEMPERATURE.label}},
                    {{weather.PRECIPITATION.label.toLowerCase()}},
                    {{weather.WIND_DIRECTION.label.toLowerCase()}},
                    {{weather.WIND_STRENGTH.label.toLowerCase()}}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {eventBus} from "../utils/event-bus"
    import {EVENTS} from "../registry/EVENTS"
    import {TIME} from "../registry/TIME/TIME"
    import {_TIME_STORE_} from "../store/time_store"
    import {_WEATHER_STORE_} from "../store/weather_store"
    
    enum YEARS {
        Первый, Второй, Третий, Четвертый, Пятый, Шестой, Седьмой, Восьмой, Девятый, Десятый, Одиннадцатый, Двенадцатый, Тринадцатый, Четырнадцатый,
        Пятнадцатый, Шестнадцатый, Семнадцатый, Восемнадцатый, Девятнадцатый, Двадцатый, 'Двадцать первый' 
    }

    enum MONTHS {
        Январь,
        Февраль,
        Март,
        Апрель,
        Май,
        Июнь,
        Июль,
        Август,
        Сентябрь,
        Октябрь,
        Ноябрь,
        Декабрь,
    }
    
    enum WEEKS {
        первая, вторая, третья, четвертая
    }
    
    enum DAYS_OF_WEEK {
        Понедельник,
        Вторник,
        Среда,
        Четверг,
        Пятница,
        Суббота,
        Воскресенье,
    }

    export default {
        name: "Weather",

        data() {
            return {
                year: _TIME_STORE_.CURRENT.YEAR,
                month: _TIME_STORE_.CURRENT.MONTH,
                week: _TIME_STORE_.CURRENT.WEEK,
                day: _TIME_STORE_.CURRENT.DAY,

                timeOfDay: TIME.TIMES_OF_DAY.NIGHT,
                season: TIME.SEASON.WINTER,
                weather: _WEATHER_STORE_
            }
        },

        created() {
            eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED, () => {
                this.year = YEARS[_TIME_STORE_.CURRENT.YEAR]
                this.month = MONTHS[_TIME_STORE_.CURRENT.MONTH].toLowerCase()
                this.week = WEEKS[_TIME_STORE_.CURRENT.WEEK]
                this.day = DAYS_OF_WEEK[_TIME_STORE_.CURRENT.DAY].toLowerCase()
            })

            eventBus.on(EVENTS.CUSTOM.TIME_OF_DAY, (timeOfDay) => {
                this.timeOfDay = timeOfDay
            })

            eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.MONTH_PASSED, () => {
                this.season = Object.assign({}, _TIME_STORE_.SEASON)
            })

            eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.SIX_HOURS_PASSED, () => {
                this.weather = Object.assign({}, _WEATHER_STORE_)
            })
        }
    }
</script>

<style lang="stylus">
    .weather
        position: relative
        padding: 15px
        border: solid 1px #222
        background-color: #fff

        &__header
            position: absolute
            top: -15px
            left: 10px
            padding: 0 10px 3px
            border: solid 1px #222
            transition: 2s

            &--night
                background-color: rgba(0, 0, 0, 1)
                color: #fff

            &--morning
                background-color: rgba(253, 94, 83, 1)
                color: #fff

            &--day
                background-color: rgba(255, 255, 66, 1)

            &--evening
                background-color: rgba(253, 94, 83, 1)
                color: #fff

        &__list
            margin: 0
            padding: 10px 0 0 0
            list-style-type: none

        &__item
            display: flex
            justify-content: space-between
            margin-top: 2px
            font-size: 14px
</style>