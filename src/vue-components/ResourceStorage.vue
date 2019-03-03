<template>
    <div class="resource-storage">
        <header class="resource-storage__header">Ресурсы</header>

        <ul class="resource-storage__list">
            <li class="resource-storage__item" v-for="resource in resourceList" :key="resource.label">
                <div class="resource-storage__item-label">{{resource.label}}</div>

                <div class="resource-storage__item-value">{{resource.quantity}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from "../utils/event-bus"
    import {EVENTS} from "../registry/EVENTS"
    import {RESOURCES} from "../registry/RESOURCES/RESOURCES"
    import {_RESOURCES_STORE_} from "../store/resources_store"

    export default {
        name: 'ResourceStorage',

        data() {
            return {
                resourceStorage: _RESOURCES_STORE_
            }
        },

        computed: {
           resourceList: function () {
                return Object.keys(this.resourceStorage).map(resource => {
                    return {
                        label: RESOURCES[resource].label,
                        quantity: _RESOURCES_STORE_[resource].length
                    }
                })
            }
        },

        created() {
            eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED, () => {
                this.resourceStorage = Object.assign({}, _RESOURCES_STORE_)
            })
        }
    }
</script>

<style lang="stylus">
    .resource-storage
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