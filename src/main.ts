declare global {
    interface Window {
        pause: boolean
    }
}

import Vue from 'vue'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.styl'

// vue-components
import FoodStorage from './vue-components/FoodStorage.vue'

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

import {HuntingHut} from '@/entities/Building/HuntingHut';

Food.createBeef()
new HuntingHut()

Mammal.createDog('Zigmund')

new Vue({
    el: '#app',

    components: {
        FoodStorage
    }
});