import {generateId} from '@/utils/generate-id'

import {RESOURCES} from '@/registry/RESOURCES/RESOURCES';

type resourceType = 'wood' | 'mineral' | 'metal'

class Resource {
    public id: string = generateId('Resource')

    constructor(public name: string,
                public type: resourceType,
                public baseCost: number,
                public weight: number, //kg in m3
                public ignitable: boolean,
                public floating: boolean,
                public isBeatiful: boolean) {

    }

    static createSpruce() {
        return new Resource(RESOURCES.SPRUCE.label, 'wood', 10, 600, true, true, false)
    }
}