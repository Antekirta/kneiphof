import {RESOURCES} from '@/registry/RESOURCES/RESOURCES'
import {Resource} from '@/entities/Resource/Resource'

interface IResourcesStore {
    [index: string]: Array<Resource>
}

const _RESOURCES_STORE_: IResourcesStore = {}

Object.keys(RESOURCES).forEach((key: string) => {
    _RESOURCES_STORE_[key] = []
})

export {_RESOURCES_STORE_}