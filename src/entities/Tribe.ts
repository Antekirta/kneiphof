'use strict';

import _findIndex from 'lodash/findIndex';

import {store} from '@/store/store';
import {eventBus} from '@/utils/event-bus';
import {EVENTS} from '@/registry/EVENTS';
import {Food} from '@/entities/Food/Food';
import {Person} from '@/entities/Person/Person';
import {Resource} from '@/entities/Resource/Resource';
import {FILL_FOOD_STORAGE, SET_POPULATION, SET_RESOURCE_STORAGE} from '@/store/actions/actions';

class Tribe {
    private resourceStorage: Resource[] = [];
    private foodStorage: Food[];
    private population: Person[];

    constructor(public name: string) {
        this.foodStorage = [];

        this.population = [];

        this.init();
    }

    private init() {
        eventBus.on(EVENTS.CUSTOM.PERSON.DIED, (personId: string) => {
            this.removeMember(personId);
        });

        eventBus.on(EVENTS.CUSTOM.FOOD.PRODUCE, (food: Food[]) => {
            this.fillFoodStorage(food);
        });

        eventBus.on(EVENTS.CUSTOM.FOOD.REMOVE, (pieceOfFoodId: string) => {
            this.removeFood(pieceOfFoodId);
        });
        
        eventBus.on(EVENTS.CUSTOM.RESOURCE.PRODUCE, (resource: Resource[]) => {
            this.fillResourceStorage(resource);
        });

        eventBus.on(EVENTS.CUSTOM.PERSON.REQUEST_FOR_FOOD, (personId: string) => {
            this.feedMember(personId);
        });
    }

    addMember(member: Person) {
        this.population.push(member);

        store.dispatch({type: SET_POPULATION.type, population: this.population});
    }

    private removeMember(memberId: string) {
        const memberIndex = _findIndex(this.population, member => {
            return member.id === memberId;
        });

        this.population.splice(memberIndex, 1);

        store.dispatch({type: SET_POPULATION.type, population: this.population});
    }

    fillResourceStorage(resources: Resource[]) {
        this.resourceStorage = this.resourceStorage.concat(resources);
        
        store.dispatch({type: SET_RESOURCE_STORAGE.type, food: this.foodStorage});
    }

    fillFoodStorage(food: Food[]) {
        this.foodStorage = this.foodStorage.concat(food).sort((a, b) => a.eatingPriority - b.eatingPriority);

        store.dispatch({type: FILL_FOOD_STORAGE.type, food: this.foodStorage});
    }

    private removeFood(pieceOfFoodId: string) {
        const foodIndex = _findIndex(this.foodStorage, pieceOfFood => {
            return pieceOfFood.id === pieceOfFoodId;
        });

        const pieceOfFood = this.foodStorage.splice(foodIndex, 1);

        store.dispatch({type: FILL_FOOD_STORAGE.type, population: this.foodStorage});

        return pieceOfFood[0];
    }

    public feedMember(memberId: string) {
        const memberIndex = _findIndex(this.population, member => {
            return member.id === memberId;
        });

        const topPieceOfFood = this.foodStorage[0];

        if (!topPieceOfFood) {
            return console.error('There is no food left!');
        }

        const pieceOfFood = this.removeFood(topPieceOfFood.id);

        this.population[memberIndex].eat(pieceOfFood);
    }
}

export {Tribe};