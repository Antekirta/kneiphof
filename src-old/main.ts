'use strict';

declare global {
    interface Window {
        pause: boolean;
    }
}

import Vue from 'vue'

// styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/app.styl'

import('@/utils/global-clock');

import {Tribe} from '@/entities/Tribe';
import {Person} from '@/entities/Person/Person';
import {Food} from '@/entities/Food/Food';
import {FishingHut} from '@/entities/Building/FishingHut';
import {Sawmill} from '@/entities/Building/Sawmill';
import {ClayQuarry} from '@/entities/Building/ClayQuarry';

// import {infoTable} from '@/entities/InfoTable/InfoTable';

import infoTable from './entities/InfoTable/InfoTable.vue'
import LocalMap from './entities/LocalMap/LocalMap.vue'

new Vue({
    el: '#app',

    components: {infoTable, LocalMap}
});

initGame();

setTimeout(() => {
    new Sawmill('Лесопилка').startUsing()
}, 3000)

setTimeout(() => {
    new ClayQuarry('Глиняный карьер').startUsing()
}, 7000)

function initGame() {
    const tribe = new Tribe('sambian');

    tribe.addMember(new Person('Krivo Krivaitis'));

    // new FishingHut('Fishing hut', 1).startUsing();
}

