<template>
    <div class="weather">
        <header class="weather__header" :class="'weather__header--' + timeOfDay.value.toLowerCase()">
            {{timeOfDay.label}}
        </header>

        <div class="weather__list">
            <div class="weather__item">
                <div class="weather__item-label"><b>{{season.label}}</b></div>
            </div>

            <div class="weather__item">
                <div class="weather__item-label">Тепло, слабый западный ветер</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "../utils/event-bus"
    import {EVENTS} from "../registry/EVENTS"
    import {TIME} from "../registry/TIME/TIME"
    import {_TIME_STORE_} from "../store/time_store"

    export default {
        name: 'Weather',

        data() {
            return {
                timeOfDay: TIME.TIMES_OF_DAY.NIGHT,

                season: TIME.SEASON.SUMMER
            }
        },

        created() {
            eventBus.on(EVENTS.CUSTOM.TIME_OF_DAY, (timeOfDay) => {
                this.timeOfDay = timeOfDay
            })

            eventBus.on(EVENTS.CUSTOM.SEASON_CHANGED, () => {
                this.season = _TIME_STORE_.SEASON
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