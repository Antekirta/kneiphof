const _intersection = require('lodash/intersection')

import {putInStorage, removeFromStorage} from '@/utils/storage-utils';

import {Mammal} from '@/entities/Being/Mammal'

import {eventBus} from '@/utils/event-bus'
import {EVENTS} from '@/registry/EVENTS'

import {_PEOPLE_STORE_} from '@/store/people-store';
import {FOOD} from '@/registry/FOOD/FOOD';
import {Building} from '@/entities/Building/Building'

interface IProfessions {
    // profession: skillPoints
    [index: string]: number
}

interface IProfessionExperience {
    // profession: months
    [index: string]: number
}

class Person extends Mammal {
    public job: Building | undefined
    public professionsExperience: IProfessionExperience = {}

    constructor(name: string, public professions: IProfessions) {
        super(name, 'human',
            70, 1, 1.7, 100,
            25, 5, 200,
            2, 'none', 0,
            'omnivorous', Object.keys(FOOD).map(key => FOOD[key].value))

        this.eventUnBinders.push(eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.MONTH_PASSED, this.manageProfessionExperience.bind(this)))
    }

    addInStorage() {
        putInStorage(_PEOPLE_STORE_, this)
    }

    protected die() {
        this.unbindEvents()

        removeFromStorage(_PEOPLE_STORE_, this)

        console.log(`${this.name} the man is dead`)
    }

    hasProfession(profession: string, skillLimit: number = 1) {
        return this.professions[profession] > skillLimit
    }
    
    private manageProfessionExperience () {
        if (this.job) {
            const professionsToTrain = _intersection(Object.keys(this.professions), Object.keys(this.job.professionalsRequirements))

            professionsToTrain.forEach((profession: string) => {
                if (!this.professionsExperience[profession]) {
                    this.professionsExperience[profession] = 0
                }

                this.professionsExperience[profession]++

                if (this.professionsExperience[profession] > 6) {
                    this.professionsExperience[profession] = 0

                    if (this.professions[profession] < 10) {
                        this.professions[profession]++
                    }
                }
            })
        }
    }
}

export {Person}