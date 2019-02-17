'use strict';

declare global {
    interface Window {
        pause: boolean;
    }
}

import('@/utils/global-clock');

import {Tribe} from '@/entities/Tribe';
import {Person} from '@/entities/Person/Person';
import {Food} from '@/entities/Food/Food';
import {FishingHut} from '@/entities/Building/FishingHut';
import {Sawmill} from '@/entities/Building/Sawmill';

import {infoTable} from '@/entities/InfoTable/InfoTable';

initGame();

new Sawmill('Sawmill').startUsing();

function initGame() {
    const tribe = new Tribe('sambian');

    tribe.addMember(new Person('Krivo Krivaitis'));

    tribe.fillFoodStorage([...Food.produceTurnip(1), ...Food.produceMeat(2)]);

    new FishingHut('Fishing hut', 1).startUsing();
    
    infoTable.init();
}

