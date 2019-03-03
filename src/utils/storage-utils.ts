const _remove = require('lodash/remove')

import {Building} from '@/entities/Building/Building'
import {Food} from '@/entities/Food/Food'
import {Mammal} from '@/entities/Being/Mammal'
import {Person} from '@/entities/Being/Person';
import {Resource} from '@/entities/Resource/Resource';

type storageItem = Food | Mammal | Person | Resource | Building

export const putInStorage = function (storage: Array<storageItem>, id: storageItem) {
    storage.push(id)
}

export const removeFromStorage = function (storage: Array<storageItem>, itemToDelete: storageItem) {
    _remove(storage, (storageItem: storageItem) => storageItem.id === itemToDelete.id)
}