declare global {
    interface Window {
        pause: boolean
    }
}

import Vue from 'vue'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.styl'

// store
import {_BEINGS_STORE_} from '@/store/beings_store'
import {_FOOD_STORE_} from '@/store/food_store'

// registry
import {FOOD} from '@/registry/FOOD/FOOD';

// utils
import('@/utils/global-clock')

// entities
import {Food} from '@/entities/Food/Food';

import {Mammal} from '@/entities/Being/Mammal'

Food.createBeef()

console.log('_FOOD_STORE_: ', _FOOD_STORE_);

setTimeout(() => {
    console.log('_FOOD_STORE_: ', _FOOD_STORE_);
}, 15000)

new Vue({
    el: '#app'
});