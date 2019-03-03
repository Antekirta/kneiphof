import {putInStorage} from '@/utils/storage-utils';

import {Building} from '@/entities/Building/Building'
import {Resource} from '@/entities/Resource/Resource'

import {RESOURCES} from '@/registry/RESOURCES/RESOURCES'
import {_RESOURCES_STORE_} from '@/store/resources_store'
import {PROFESSIONS} from '@/registry/PROFESSIONS/PROFESSIONS'
import {FOOD} from '@/registry/FOOD/FOOD';

class WoodCutterHut extends Building {
    public name = 'Хижина дровосека'
    
    constructor() {
        super(1, {
            [PROFESSIONS.WOOD_CUTTER.value]: 1
        })

        this.production.push(RESOURCES.SPRUCE.label)
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