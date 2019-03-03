<template>
    <div class="buildings-list">
        <header class="buildings-list__header">Постройки</header>

        <ul class="buildings-list__list">
            <li class="buildings-list__item" v-for="building in buildingsList" :key="building.id">
                <div class="buildings-list__item-label">
                    {{building.name}}
                </div>

                <div class="buildings-list__item-value">{{building.production}}</div>

                <div class="buildings-list__item-value">{{building.productivity}} ед. в шесть часов</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from "../utils/event-bus"
    import {EVENTS} from "../registry/EVENTS"
    import {_BUILDINGS_STORE_} from "../store/buildings_store"

    export default {
        name: 'BuildingsList',

        data() {
            return {
                buildings: _BUILDINGS_STORE_
            }
        },

        computed: {
            buildingsList: function () {
                return Object.keys(this.buildings).map(key => {
                    const building = this.buildings[key]

                    return {
                        name: building.name,
                        productivity: building.productivity,
                        production: building.production.join(', '),
                        id: building.id
                    }
                })
            }
        },

        created() {
            eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED, () => {
                this.buildings = Object.assign({}, _BUILDINGS_STORE_)
            })
        }
    }
</script>

<style lang="stylus">
    .buildings-list
        position: relative
        padding: 15px
        margin-top: 30px
        border: solid 1px #222
        background-color: #fff

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
            justify-content: flex-start
            margin-bottom: 5px
            font-size: 14px

        &__item-label
            width: 250px

        &__item-value
            min-width: 150px
            padding: 0 15px
            text-align: left
</style>