<template>
    <div class="info-table">
        <div class="info-table__section">
            <header class="info-table__header">Ресурсы</header>

            <ul class="info-table__list">
                <li class="info-table__item">
                    <div class="info-table__item-label">Дерево</div>
                    <div class="info-table__item-value">{{resources[$options.RESOURCES.WOOD]}}</div>
                </li>

                <li class="info-table__item">
                    <div class="info-table__item-label">Глина</div>
                    <div class="info-table__item-value">{{resources[$options.RESOURCES.CLAY]}}</div>
                </li>

                <li class="info-table__item">
                    <div class="info-table__item-label">Камень</div>
                    <div class="info-table__item-value">{{resources[$options.RESOURCES.STONE]}}</div>
                </li>

                <li class="info-table__item">
                    <div class="info-table__item-label">Железо</div>
                    <div class="info-table__item-value">{{resources[$options.RESOURCES.IRON]}}</div>
                </li>

                <li class="info-table__item">
                    <div class="info-table__item-label">Пушнина</div>
                    <div class="info-table__item-value">{{resources[$options.RESOURCES.FUR]}}</div>
                </li>

                <li class="info-table__item">
                    <div class="info-table__item-label">Янтарь</div>
                    <div class="info-table__item-value">{{resources[$options.RESOURCES.AMBER]}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
    import {store} from "../../store/store";
    import {RESOURCES} from "../../registry/RESOURCES";
    import {FOOD} from "../../registry/FOOD";

    export default {
        name: "InfoTable",

        data() {
            return {
                resources: {
                    [RESOURCES.WOOD]: <number> 0,
                    [RESOURCES.CLAY]: <number> 0,
                    [RESOURCES.STONE]: <number> 0,
                    [RESOURCES.IRON]: <number> 0,
                    [RESOURCES.FUR]: <number> 0,
                    [RESOURCES.AMBER]: <number> 0,
                }
            };
        },

        created() {
            this.$options.RESOURCES = RESOURCES;
            
            store.subscribe(() => {
                const state: any = store.getState();
                
                this.resources[RESOURCES.WOOD] = state[RESOURCES.WOOD].length;
                this.resources[RESOURCES.CLAY] = state[RESOURCES.CLAY].length;
                this.resources[RESOURCES.STONE] = state[RESOURCES.STONE].length;
                this.resources[RESOURCES.IRON] = state[RESOURCES.IRON].length;
                this.resources[RESOURCES.FUR] = state[RESOURCES.FUR].length;
                this.resources[RESOURCES.AMBER] = state[RESOURCES.AMBER].length;
            })
        }
    };
</script>

<style lang="stylus">
    .info-table
        width: 300px
        
        &__header
            font-weight: 600
        
        &__list
            padding: 15px
            margin: 0
        
        &__item
            display: flex
            justify-content: flex-start
    
        &__item-value
            margin-left: 15px
</style>