'use strict';

declare global {
    interface Window {
        pause: boolean;
    }
}

import Vue from 'vue';

import('@/utils/global-clock');

import {Tribe} from '@/entities/Tribe';
import {Person} from '@/entities/Person/Person';
import {Food} from '@/entities/Food/Food';
import {FishingHut} from '@/entities/Building/FishingHut';
import {Sawmill} from '@/entities/Building/Sawmill';
import {ClayQuarry} from '@/entities/Building/ClayQuarry';

// import {infoTable} from '@/entities/InfoTable/InfoTable';

import infoTable from './entities/InfoTable/InfoTable.vue'

new Vue({
    el: '#app',

    components: {infoTable}
});

initGame();


new Sawmill('Лесопилка').startUsing();
new ClayQuarry('Глиняный карьер').startUsing();

function initGame() {
    const tribe = new Tribe('sambian');

    tribe.addMember(new Person('Krivo Krivaitis'));

    tribe.fillFoodStorage([...Food.produceTurnip(1), ...Food.produceMeat(2)]);

    new FishingHut('Fishing hut', 1).startUsing();
}

