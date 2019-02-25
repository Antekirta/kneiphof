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

        <div class="info-table__section">
            <header class="info-table__header">Еда</header>

            <ul class="info-table__list">
                <li class="info-table__item">
                    <div class="info-table__item-label">Мясо</div>
                    <div class="info-table__item-value">{{food[$options.FOOD.MEAT]}}</div>
                </li>

                <li class="info-table__item">
                    <div class="info-table__item-label">Рыба</div>
                    <div class="info-table__item-value">{{food[$options.FOOD.FISH]}}</div>
                </li>

                <li class="info-table__item">
                    <div class="info-table__item-label">Репа</div>
                    <div class="info-table__item-value">{{food[$options.FOOD.TURNIP]}}</div>
                </li>

                <li class="info-table__item">
                    <div class="info-table__item-label">Пшеница</div>
                    <div class="info-table__item-value">{{food[$options.FOOD.WHEAT]}}</div>
                </li>

                <li class="info-table__item">
                    <div class="info-table__item-label">Мука</div>
                    <div class="info-table__item-value">{{food[$options.FOOD.FLOUR]}}</div>
                </li>

                <li class="info-table__item">
                    <div class="info-table__item-label">Хлеб</div>
                    <div class="info-table__item-value">{{food[$options.FOOD.BREAD]}}</div>
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
                },

                food: {
                    [FOOD.MEAT]: <number> 0,
                    [FOOD.FISH]: <number> 0,
                    [FOOD.TURNIP]: <number> 0,
                    [FOOD.WHEAT]: <number> 0,
                    [FOOD.FLOUR]: <number> 0,
                    [FOOD.BREAD]: <number> 0,
                }
            };
        },

        created() {
            this.$options.RESOURCES = RESOURCES;
            this.$options.FOOD = FOOD;

            store.subscribe(() => {
                const state: any = store.getState();

                this.resources[RESOURCES.WOOD] = state[RESOURCES.WOOD].length;
                this.resources[RESOURCES.CLAY] = state[RESOURCES.CLAY].length;
                this.resources[RESOURCES.STONE] = state[RESOURCES.STONE].length;
                this.resources[RESOURCES.IRON] = state[RESOURCES.IRON].length;
                this.resources[RESOURCES.FUR] = state[RESOURCES.FUR].length;
                this.resources[RESOURCES.AMBER] = state[RESOURCES.AMBER].length;

                this.food[FOOD.MEAT] = state[FOOD.MEAT].length;
                this.food[FOOD.FISH] = state[FOOD.FISH].length;
                this.food[FOOD.TURNIP] = state[FOOD.TURNIP].length;
                this.food[FOOD.WHEAT] = state[FOOD.WHEAT].length;
                this.food[FOOD.FLOUR] = state[FOOD.FLOUR].length;
                this.food[FOOD.BREAD] = state[FOOD.BREAD].length;
            })
        }
    };
</script>

<style lang="stylus">
    .info-table
        width: 300px
        padding: 15px
        border: solid 2px #222

        &__header
            padding-bottom: 5px
            border-bottom: solid 1px #222
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