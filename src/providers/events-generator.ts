import {WorldEvent} from '@/entities/WorldEvent/WorldEvent'
import {eventBus} from '@/utils/event-bus'
import {EVENTS} from '@/registry/EVENTS'

let eventsForNextIteration: Array<WorldEvent> = [];

function addToQueue(event: WorldEvent) {
    eventsForNextIteration.push(event)    
}

function clearQueue () {
    eventsForNextIteration = []
}

function emitImmediately (event: WorldEvent) {
    eventBus.emit(EVENTS.CUSTOM.WORLD_EVENT, event)
}

export {addToQueue, clearQueue, emitImmediately}