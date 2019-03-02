import {generateId} from '@/utils/generate-id';

import {eventBus} from '@/utils/event-bus'
import {EVENTS} from '@/registry/EVENTS'

class Building {
    readonly id: string = generateId('Building')
    private unbindEvent: any
    
    constructor (
        protected productivity: number
    ) {
        this.unbindEvent = eventBus.on(EVENTS.CUSTOM.GLOBAL_CLOCK.SIX_HOURS_PASSED, () => {
            this.produce()
        })
    }
    
    protected produce () {
        // this method is up to particular realisation
    }
}

export {Building}