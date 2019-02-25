<template>
    <div class="info-table">
        <div class="info-table__section">
            <header class="info-table__header">Ресурсы</header>

            <ul class="info-table__list">
                <li class="info-table__item" v-for="resource in resources">
                    <div class="info-table__item-label">label</div>
                    <div class="info-table__item-value">value</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {store} from "../../store/store";

    export default {
        name: "InfoTable",

        data() {
            return {
                resources: []
            };
        },

        created() {
            store.subscribe(() => {
                const state: any = store.getState();
                
                this.resources = state.resourceStorage;
            })
        }
    };
</script>