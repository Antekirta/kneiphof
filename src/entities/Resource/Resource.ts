import {generateId} from '@/utils/generate-id'
import {putInStorage, removeFromStorage} from '@/utils/storage-utils'

import {_RESOURCES_STORE_} from '@/store/resources_store'
import {RESOURCES} from '@/registry/RESOURCES/RESOURCES'

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
        this.addToStorage()
    }

    private addToStorage() {
        putInStorage(_RESOURCES_STORE_[this.name], this)
    }

    static createSpruce() {
        return new Resource(RESOURCES.SPRUCE.value, 'wood', 10, 600, true, true, false)
    }
}

export {Resource}