const _remove = require('lodash/remove')

import {Food} from '@/entities/Food/Food';
import {Mammal} from '@/entities/Being/Mammal';

type storageItem = Food | Mammal

export const putInStorage = function (storage: Array<storageItem>, id: storageItem) {
    storage.push(id)
}

export const removeFromStorage = function (storage: Array<storageItem>, itemToDelete: storageItem) {
    _remove(storage, (storageItem: storageItem) => storageItem.id === itemToDelete.id)
}