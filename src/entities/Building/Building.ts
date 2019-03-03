import {generateId} from '@/utils/generate-id'
import {putInStorage, removeFromStorage} from '@/utils/storage-utils';

import {Person} from '@/entities/Being/Person'

import {eventBus} from '@/utils/event-bus'
import {EVENTS} from '@/registry/EVENTS'
import {_BUILDINGS_STORE_} from '@/store/buildings_store';

interface IProfessionalsRequirements {
    // profession: professionals count
    [index: string]: number
}

class Building {
    readonly id: string = generateId('Building')
    public production: Array<string> = []
    private unbindEvent: any
    public workers: Array<Person> = []

    constructor(protected productivity: number,
                public professionalsRequirements: IProfessionalsRequirements,) {
        this.unbindEvent = eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.SIX_HOURS_PASSED, () => {
            if (this.requirementsAreFulfilled()) {
                this.produce()
            }
        })

        putInStorage(_BUILDINGS_STORE_, this)
    }

    protected requirementsAreFulfilled() {
        return Object.keys(this.professionalsRequirements).every(profession => {
            return this.professionalsRequirements[profession] <= this.workers.filter(worker => {
                return worker.hasProfession(profession)
            }).length
        })
    }

    protected produce() {
        // this method is up to particular realisation
    }

    protected destroy() {
        removeFromStorage(_BUILDINGS_STORE_, this)

        this.unbindEvent()
    }

    public hire(worker: Person) {
        worker.job = this

        this.workers.push(worker)
    }
}

export {Building}