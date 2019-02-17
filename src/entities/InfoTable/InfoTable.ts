'use strict';

import {store} from '@/store/store';
import {FOOD} from '@/registry/FOOD';
import {RESOURCES} from '@/registry/RESOURCES';

class InfoTable {
    private elems: any;

    constructor(private root: any) {
        this.elems = {
            resources: {
                [RESOURCES.WOOD]: this.root.querySelector('#info-table__wood'),
                [RESOURCES.CLAY]: this.root.querySelector('#info-table__clay'),
                [RESOURCES.STONE]: this.root.querySelector('#info-table__stone'),
                [RESOURCES.IRON]: this.root.querySelector('#info-table__iron'),
                [RESOURCES.AMBER]: this.root.querySelector('#info-table__amber'),
                [RESOURCES.FUR]: this.root.querySelector('#info-table__fur'),
            },

            food: {
                [FOOD.MEAT]: this.root.querySelector('#info-table__meat'),
                [FOOD.FISH]: this.root.querySelector('#info-table__fish'),
                [FOOD.TURNIP]: this.root.querySelector('#info-table__turnip'),
                [FOOD.WHEAT]: this.root.querySelector('#info-table__wheat'),
                [FOOD.FLOUR]: this.root.querySelector('#info-table__flour'),
                [FOOD.BREAD]: this.root.querySelector('#info-table__bread'),
            }
        };
    }

    public init() {
        store.subscribe(() => {
            const state: any = store.getState();

            this.renderData(state);
        });
    }

    renderData(state: any) {
        for (let key in this.elems.food) {
            if (this.elems.food.hasOwnProperty(key)) {
                this.elems.food[key].textContent = state.foodStorage.filter((item: any) => item.name === key).length;
            }
        }

        for (let key in this.elems.resources) {
            if (this.elems.resources.hasOwnProperty(key)) {
                this.elems.resources[key].textContent = state.resourceStorage.filter((item: any) => item.name === key).length;
            }
        }
    }
}

export const infoTable = new InfoTable(document.querySelector('.info-table'));

