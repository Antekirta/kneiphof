import {MAMMALS} from '@/registry/BEINGS/MAMMALS'
import {IStore} from '@/store/IStore';

const _BEINGS_STORE_: IStore = {}

Object.keys(MAMMALS).forEach((key: string) => {
    _BEINGS_STORE_[key] = []
})

export {_BEINGS_STORE_}