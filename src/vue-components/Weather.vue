<template>
    <div class="weather">
        <header class="weather__header">{{timeOfDay}}</header>
        
        <div class="weather__list">
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

    export default {
        name: 'Weather',
        
        data () {
            return {
                timeOfDay: TIME.TIMES_OF_DAY.NIGHT.label
            }
        },
        
        created () {
            eventBus.on(EVENTS.CUSTOM.TIME_OF_DAY, (timeOfDay) => {
                this.timeOfDay = timeOfDay.label
            })
        }
    }
</script>

<style lang="stylus">
    .weather
        position: relative
        padding: 15px
        border: solid 1px #222

        &__header
            position: absolute
            top: -15px
            left: 10px
            padding: 0 10px
            background-color: #fff

        &__list
            margin: 0
            padding: 0
            list-style-type: none

        &__item
            display: flex
            justify-content: space-between
            margin-top: 2px
            font-size: 14px
</style>