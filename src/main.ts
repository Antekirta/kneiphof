declare global {
    interface Window {
        pause: boolean;
    }
}

import Vue from 'vue'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.styl'

// utils
import('@/utils/global-clock');

// entities
import {Mammal} from '@/entities/Being/Mammal';

const dog = Mammal.createDog('Zigmund')

dog.place(100, 150)

console.log(dog);

new Vue({
    el: '#app'
});