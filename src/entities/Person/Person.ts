'use strict';

const uniqid = require('uniqid');

import {eventBus} from "@/utils/event-bus";
import {EVENTS} from "@/registry/EVENTS";
import {Food} from "@/entities/Food/Food";
import {store} from "@/store/store";

class Person {
    public id: string;
    private caloryConsumptionPerHour: number = 100;
    private calories: number = 1000;
    public isDead: boolean = false;

    constructor(public name: string) {
        this.id = this.name + uniqid();

        this.init();
    }

    private init() {
        this.unbindReduceCalories = eventBus.on(EVENTS.CUSTOM.TIME.HOUR_PASSED, this.reduceCalories.bind(this));
    }

    private unbindReduceCalories(): void {
    }

    private reduceCalories() {
        this.calories -= this.caloryConsumptionPerHour;
        
        if (this.calories <= 0) {
            this.requestForFood();

            console.log(`${this.name}. Calories: ${this.calories}.`);
        }

        if (this.calories < -500) {
            this.killPerson();

            this.unbindReduceCalories();
        }
    }

    private requestForFood() {
        eventBus.emit(EVENTS.CUSTOM.PERSON.REQUEST_FOR_FOOD, this.id);
    }

    public eat(pieceOfFood: Food) {
        this.calories += pieceOfFood.calories;

        console.log(`${this.name} eats.`);
        console.log(`${this.name}. Calories: ${this.calories}.`);
    }

    public killPerson() {
        this.isDead = true;

        console.log(`${this.name} is dead!`);

        eventBus.emit(EVENTS.CUSTOM.PERSON.DIED, this.id)
    }
}

export {Person};