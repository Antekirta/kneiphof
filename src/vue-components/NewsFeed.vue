<template>
    <div class="news-feed">
        <div class="news-feed__header">События</div>

        <div class="news-feed__list">
            <div class="news-feed__item" v-for="event in events" :key="event.title">
                <header class="news-feed__item-header"><b>{{event.title}}</b></header>

                <div class="news-feed__item-descr" v-html="event.description"></div>

                <div class="news-feed__item-actions">
                    <button class="news-feed__item-action" v-for="action in event.actions" :key="action.title"
                            :title="action.title">{{action.title}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "../utils/event-bus"
    import {EVENTS} from "../registry/EVENTS"

    function getEvent() {
        return {
            title: 'На остров заплыл бешеный лось!',
            description: 'Взмыленное животное выскочило из воды и помчалось вдоль прибрежных кустов, круша все на своем пути.',
            actions: [
                {
                    title: 'Игнорировать',
                    action: 'ignore'
                },

                {
                    title: 'Позвать охотника',
                    action: 'call-hunter'
                }
            ]
        }
    }

    export default {
        name: 'NewsFeed',

        data() {
            return {
                events: [
                    {
                        title: 'Прибытие',
                        description: 'Вы стоите на берегу реки. По ту сторону - небольшой, покрытый лесом, остров.',
                        actions: [
                            {
                                title: 'Ничего не делать',
                                action: 'ignore'
                            },

                            {
                                title: 'Переплыть реку',
                                action: 'swim-across'
                            }
                        ]
                    }
                ]
            }
        },

        created() {
            eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.SIX_HOURS_PASSED, () => {
                this.events.unshift(getEvent())
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
</style>