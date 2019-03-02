import {FOOD} from '@/registry/FOOD/FOOD'
import {IStore} from '@/store/IStore';

const _FOOD_STORE_: IStore = {};

Object.keys(FOOD).forEach((key: string) => {
    _FOOD_STORE_[key] = []
})

export {_FOOD_STORE_}