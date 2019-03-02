declare global {
    interface Window {
        pause: boolean
    }
}

import Vue from 'vue'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.styl'

// registry

// utils
import('@/utils/global-clock')

// entities
import {Mammal} from '@/entities/Being/Mammal'


new Vue({
    el: '#app'
});