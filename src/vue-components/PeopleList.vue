<template>
    <div class="people-list">
        <header class="people-list__header">Жители</header>

        <ul class="people-list__list">
            <li class="people-list__item">
                <div class="people-list__item-label"><b>Имя</b></div>
                <div class="people-list__item-value"><b>Место работы</b></div>
                <div class="people-list__item-value"><b>Сытость</b></div>
            </li>
            
            <li class="people-list__item" v-for="person in peopleList" :key="person.id">
                <div class="people-list__item-label">
                    {{person.name}}

                    (<span v-for="(skill, index) in person.professions"
                           :title="'Навык: ' + skill.skillValue">
                        {{skill.name}}
                        <span v-show="index !== person.professions.length - 1">, </span>
                    </span>)
                </div>

                <div class="people-list__item-value">{{person.job.name}}</div>
                
                <div class="people-list__item-value">{{person.satiety}}</div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {eventBus} from "../utils/event-bus"
    import {EVENTS} from "../registry/EVENTS"
    import {_PEOPLE_STORE_} from "../store/people-store"
    import {PROFESSIONS} from "../registry/PROFESSIONS/PROFESSIONS"

    export default {
        name: 'PeopleList',

        data() {
            return {
                people: _PEOPLE_STORE_
            }
        },

        computed: {
            peopleList: function () {
                return Object.keys(this.people).map(key => {
                    const person = this.people[key]

                    return {
                        name: person.name,
                        id: person.id,
                        professions: professions(),
                        job: person.job,
                        satiety: isHungry()
                    }

                    function professions() {
                        return Object.keys(person.professions).map(key => {
                            return {
                                name: PROFESSIONS[key].label,
                                skillValue: person.professions[key]
                            }
                        })
                    }

                    function isHungry() {
                        let satiety = 'сыт';

                        if (person.calories > 0 && person.calories < 1000) {
                            satiety = 'голоден'
                        } else if (person.calories < 0) {
                            satiety = 'Истощен'
                        }

                        return satiety
                    }
                })
            }
        },

        created() {
            eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.HOUR_PASSED, () => {
                this.people = Object.assign({}, _PEOPLE_STORE_)
            })
        }
    }
</script>

<style lang="stylus">
    .people-list
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