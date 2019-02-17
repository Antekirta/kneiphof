'use strict';

import {store} from '@/store/store';
import _find from 'lodash/find';

class InfoTable {
    private elems: any;

    constructor(private root: any) {
        this.elems = {
            resources: {
                wood: this.root.querySelector('#info-table__wood'),
                clay: this.root.querySelector('#info-table__clay'),
                stone: this.root.querySelector('#info-table__stone'),
                iron: this.root.querySelector('#info-table__iron'),
                amber: this.root.querySelector('#info-table__amber'),
                fur: this.root.querySelector('#info-table__fur'),
            },

            food: {
                meat: this.root.querySelector('#info-table__meat'),
                fish: this.root.querySelector('#info-table__fish'),
                turnip: this.root.querySelector('#info-table__turnip'),
                wheat: this.root.querySelector('#info-table__wheat'),
                flour: this.root.querySelector('#info-table__flour'),
                bread: this.root.querySelector('#info-table__bread'),
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

