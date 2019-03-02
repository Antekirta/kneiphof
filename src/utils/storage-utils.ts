const _remove: any = import('lodash/remove')

export const putInStorage = function (storage: Array<string>, id: string) {
    storage.push(id)
}

export const removeFromStorage = function (storage: Array<string>, idToDelete: string) {
    _remove(storage, (id: string) => id === idToDelete)
}