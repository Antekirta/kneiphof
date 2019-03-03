import {generateId} from '@/utils/generate-id';

import {Person} from '@/entities/Being/Person';

import {eventBus} from '@/utils/event-bus'
import {EVENTS} from '@/registry/EVENTS'

interface IProfessionalsRequirements {
    // profession: professionals count
    [index: string]: number
}

class Building {
    readonly id: string = generateId('Building')
    private unbindEvent: any
    public workers: Array<Person> = []

    constructor(protected productivity: number,
                public professionalsRequirements: IProfessionalsRequirements,) {
        this.unbindEvent = eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.SIX_HOURS_PASSED, () => {
            if (this.requirementsAreFulfilled()) {
                this.produce()
            }
        })
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
    
    public hire(worker: Person) {
        worker.job = this
        
        this.workers.push(worker)
    }
}

export {Building}