<template>
    <div class="local-map">
        <div class="local-map__grid">
            <div class="local-map__row" v-for="row in 100">
                <div class="local-map__cell" v-for="cell in 100"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    'use strict';
    
    export default {
        name: 'LocalMap'
    }
</script>

<style lang="stylus">
    .local-map
        width: 1000px
        height: 1000px
        outline: solid 2px #222
    
        &__row
            display: flex
            flex-wrap: nowrap
        
        &__cell
            width: 10px
            height: 10px
            outline: solid 1px rgba(22, 22, 22, .1)
</style>