import {FOOD} from '@/registry/FOOD/FOOD'

const _FOOD_STORE_: { [index: string]: Array<string> } = {};

Object.keys(FOOD).forEach((key: string) => {
    _FOOD_STORE_[key] = []
})

export {_FOOD_STORE_}