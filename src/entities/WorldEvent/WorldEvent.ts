import {generateId} from '@/utils/generate-id'

interface IAction {
    title: string,
    action?: any
}

class WorldEvent {
    public id: string = generateId('WorldEvent')

    constructor(public title: string,
                public description: string,
                public effect?: any,
                public actions?: Array<IAction>) {

    }
}

export {WorldEvent}