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

const myTribe = new Tribe('my-tribe');

myTribe.addMember(new Person('Ingvar'));

myTribe.fillFoodStorage([...Food.produceTurnip(1), ...Food.produceMeat(2)]);

new FishingHut('Fishing hut', 1).startUsing();
