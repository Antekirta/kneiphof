<template>
    <div class="food-storage">
        <header class="food-storage__header">Еда</header>

        <ul class="food-storage__list">
            <li class="food-storage__item" v-for="food in foodList" :key="food.label">
                <div class="food-storage__item-label">{{food.label}}</div>

                <div class="food-storage__item-value">{{food.quantity}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from "../utils/event-bus"
    import {EVENTS} from "../registry/EVENTS"
    import {FOOD} from "../registry/FOOD/FOOD"
    import {_FOOD_STORE_} from "../store/food_store"

    export default {
        name: 'FoodStorage',

        data() {
            return {
                foodStorage: _FOOD_STORE_
            }
        },

        computed: {
            foodList: function () {
                return Object.keys(this.foodStorage).map(food => {
                    return {
                        label: FOOD[food].label,
                        quantity: _FOOD_STORE_[food].length
                    }
                })
            }
        },

        created() {
            eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED, () => {
                this.foodStorage = Object.assign({}, _FOOD_STORE_)
            })
        }
    }
</script>

<style lang="stylus">
    .food-storage
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
            justify-content: space-between
            margin-top: 2px
            font-size: 14px
</style>