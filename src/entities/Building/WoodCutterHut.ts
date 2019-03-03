import {putInStorage} from '@/utils/storage-utils';

import {Building} from '@/entities/Building/Building'
import {Resource} from '@/entities/Resource/Resource'

import {RESOURCES} from '@/registry/RESOURCES/RESOURCES'
import {_RESOURCES_STORE_} from '@/store/resources_store'
import {PROFESSIONS} from '@/registry/PROFESSIONS/PROFESSIONS'

class WoodCutterHut extends Building {
    constructor() {
        super(1, {
            [PROFESSIONS.WOOD_CUTTER.value]: 1
        })
    }

    protected produce() {
        for (let i = 0; i < this.productivity; i++) {
            if (Math.random() > 0.2) {
                putInStorage(_RESOURCES_STORE_[RESOURCES.SPRUCE.value], Resource.createSpruce())
            }
        }
    }
}

export {WoodCutterHut}