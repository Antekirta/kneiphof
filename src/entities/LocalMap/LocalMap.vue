<template>
    <div class="local-map">
        <div class="local-map__grid">
            <!--<div class="local-map__row" v-for="row in 100">-->
                <!--<div class="local-map__cell" v-for="cell in 100"></div>-->
            <!--</div>-->
        </div>
    </div>
</template>

<script lang="ts">
    "use strict";

    import {eventBus} from "../../utils/event-bus";
    import {EVENTS} from "../../registry/EVENTS";

    const cellSize = 10;
    
    export default {
        name: "LocalMap",

        data() {
            return {
                buildings: []
            }
        },

        created() {
            
        },
        
        mounted () {
            eventBus.on(EVENTS.CUSTOM.BUILDING.ERECTED, (data) => {
                this.buildings.push({
                    name: data.buildingName,
                    size: data.size,
                    coords: data.coords
                });

                this.renderBuildings()
            });
        },

        methods: {
            renderBuildings() {
                this.buildings.forEach(building => {
                    const buildingElem = document.createElement("div")

                    buildingElem.classList.add('local-map__building')
                    buildingElem.style.position = "absolute"
                    buildingElem.style.width = building.size.width * cellSize + "px"
                    buildingElem.style.height = building.size.height * cellSize + "px"
                    buildingElem.style.top = building.coords.y + "px"
                    buildingElem.style.left = building.coords.x + "px"
                    
                    buildingElem.textContent = building.name.substr(0, 1)
                    buildingElem.setAttribute('title', building.name)

                    this.$el.querySelector('.local-map__grid').appendChild(buildingElem);
                })
            }
        }
    }
</script>

<style lang="stylus">
    .local-map
        width: 1000px
        height: 1000px
        outline: solid 2px #222
        background-image: url('/grass.jpg')

        &__grid
            position: relative

        &__row
            display: flex
            flex-wrap: nowrap

        &__cell
            width: 10px
            height: 10px
            outline: solid 1px rgba(22, 22, 22, .1)
    
        &__building
            display: flex
            justify-content: center
            align-items: center
            overflow: hidden
            padding: 2px
            background-image: url('/images/icons/buildings/sawmill.png')
            background-size: cover
            transition: .2s
            text-align: center
            text-transform: uppercase
            font-size: 20px
            font-weight: 600
            color: #fff
</style>