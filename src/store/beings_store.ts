import {MAMMALS} from '@/registry/BEINGS/MAMMALS'
import {Mammal} from '@/entities/Being/Mammal';

interface IBeingStore {
    [index: string]: Array<Mammal>
}

const _BEINGS_STORE_: IBeingStore = {}

Object.keys(MAMMALS).forEach((key: string) => {
    _BEINGS_STORE_[key] = []
})

export {_BEINGS_STORE_}