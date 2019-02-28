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

// Map
import {localMap} from '@/entities/Map/LocalMap';

// entities
import {Mammal} from '@/entities/Being/Mammal';

localMap.getCellsCoords(2000, 320)

new Vue({
    el: '#app'
});