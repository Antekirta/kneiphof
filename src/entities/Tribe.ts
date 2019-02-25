'use strict';

import _findIndex from 'lodash/findIndex';

import {store} from '@/store/store'
import {eventBus} from '@/utils/event-bus'
import {EVENTS} from '@/registry/EVENTS'
import {Food} from '@/entities/Food/Food'
import {Person} from '@/entities/Person/Person'
import {Resource} from '@/entities/Resource/Resource'
import foodActions from '../store/actions/food'
import resourcesActions from '../store/actions/resources'
import populationActions from '../store/actions/population'

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

        eventBus.on(EVENTS.CUSTOM.FOOD.PRODUCE, (food: Food[], foodType: string) => {
            this.fillFoodStorage(food, foodType);
        });

        eventBus.on(EVENTS.CUSTOM.FOOD.REMOVE, (pieceOfFoodId: string, foodType: string) => {
            this.removeFood(pieceOfFoodId, foodType);
        });
        
        eventBus.on(EVENTS.CUSTOM.RESOURCE.PRODUCE, (resource: Resource[], resourceType: string) => {
            this.fillResourceStorage(resource, resourceType);
        });

        eventBus.on(EVENTS.CUSTOM.PERSON.REQUEST_FOR_FOOD, (personId: string, foodType: string) => {
            this.feedMember(personId, foodType);
        });
    }

    addMember(member: Person) {
        this.population.push(member);

        store.dispatch({type: populationActions.population.type, value: this.population});
    }

    private removeMember(memberId: string) {
        const memberIndex = _findIndex(this.population, member => {
            return member.id === memberId;
        });

        this.population.splice(memberIndex, 1);

        store.dispatch({type: populationActions.population.type, value: this.population});
    }

    fillResourceStorage(resources: Resource[], resourceType: string) {
        this.resourceStorage = this.resourceStorage.concat(resources);
        
        store.dispatch({type: resourcesActions[resourceType].type, value: this.resourceStorage});
    }

    fillFoodStorage(food: Food[], foodType: string) {
        this.foodStorage = this.foodStorage.concat(food).sort((a, b) => a.eatingPriority - b.eatingPriority);

        store.dispatch({type: foodActions[foodType].type, value: this.foodStorage});
    }

    private removeFood(pieceOfFoodId: string, foodType: string) {
        const foodIndex = _findIndex(this.foodStorage, pieceOfFood => {
            return pieceOfFood.id === pieceOfFoodId;
        });

        const pieceOfFood = this.foodStorage.splice(foodIndex, 1);

        store.dispatch({type: foodActions[foodType].type, value: this.foodStorage});

        return pieceOfFood[0];
    }

    public feedMember(memberId: string, foodType: string) {
        const memberIndex = _findIndex(this.population, member => {
            return member.id === memberId;
        });

        const topPieceOfFood = this.foodStorage[0];

        if (!topPieceOfFood) {
            return console.error('There is no food left!');
        }

        const pieceOfFood = this.removeFood(topPieceOfFood.id, foodType);

        this.population[memberIndex].eat(pieceOfFood);
    }
}

export {Tribe};