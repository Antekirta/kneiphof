<template>
    <div class="news-feed">
        <div class="news-feed__header">События</div>

        <div class="news-feed__list">
            <transition-group name="fade">
                <div class="news-feed__item" v-for="event in events" :key="event.id">
                    <header class="news-feed__item-header"><b>{{event.title}}</b></header>

                    <div class="news-feed__item-descr" v-html="event.description"></div>

                    <div class="news-feed__item-actions">
                        <button class="news-feed__item-action"
                                v-for="action in event.actions"
                                :key="action.title"
                                @click="action.action"
                                :title="action.title">{{action.title}}
                        </button>
                    </div>
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script lang="ts">
    import {WorldEvent} from "../entities/WorldEvent/WorldEvent"
    import {eventBus} from "../utils/event-bus"
    import {EVENTS} from "../registry/EVENTS"

    export default {
        name: "NewsFeed",

        data() {
            return {
                events: <Array<WorldEvent>> []
            }
        },

        created() {
            eventBus.on(EVENTS.CUSTOM.WORLD_EVENT, (event: WorldEvent) => {
                this.events.unshift(event)

                event.effect && event.effect()

                event.actions.forEach(action => {
                    action.action = action.action || function () {
                    }
                })

                if (this.events.length > 20) {
                    this.events.pop()
                }
            })
        }
    }
</script>

<style lang="stylus">
    .news-feed
        position: relative
        max-height: 100vh
        padding: 15px
        border: solid 1px #222
        background-color: #fff

        &__header
            position: absolute
            top: -15px
            left: 10px
            padding: 0 10px
            background-color: #fff

        &__item
            margin-bottom: 30px
            transition: .3s

        &__item-actions
            margin-top: 5px

    .fade-enter-active, .fade-leave-active
        transition: opacity .5s

    .fade-enter, .fade-leave-to
        opacity: 0
</style>