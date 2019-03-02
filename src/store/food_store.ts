import {FOOD} from '@/registry/FOOD/FOOD'
import {Food} from '@/entities/Food/Food';

interface IFoodStore {
    [index: string]: Array<Food>
}

const _FOOD_STORE_: IFoodStore = {};

Object.keys(FOOD).forEach((key: string) => {
    _FOOD_STORE_[key] = []
})

export {_FOOD_STORE_}