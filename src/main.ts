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
import ResourceStorage from './vue-components/ResourceStorage.vue'

// store
import {_BEINGS_STORE_} from '@/store/beings_store'
import {_FOOD_STORE_} from '@/store/food_store'

// registry
import {FOOD} from '@/registry/FOOD/FOOD'
import {PROFESSIONS} from '@/registry/PROFESSIONS/PROFESSIONS'

// utils
import('@/utils/global-clock')

// entities
import {Food} from '@/entities/Food/Food';

import {Mammal} from '@/entities/Being/Mammal'
import {Person} from '@/entities/Being/Person';

import {HuntingHut} from '@/entities/Building/HuntingHut';
import {WoodCutterHut} from '@/entities/Building/WoodCutterHut'

Food.createBeef()

const huntersHut = new HuntingHut()
const woodCutterHut = new WoodCutterHut()

const herkus = new Person('Herkus', {
        [PROFESSIONS.HUNTER.value]: 2
    }
)

const gediminas = new Person('Gediminas', {
        [PROFESSIONS.WOOD_CUTTER.value]: 2
    }
)

huntersHut.hire(herkus)
woodCutterHut.hire(gediminas)

new Vue({
    el: '#app',

    components: {
        FoodStorage, ResourceStorage
    }
});