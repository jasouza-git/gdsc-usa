<script setup lang="ts">
    const info = withDefaults(defineProps<{
        white?:boolean
    }>(), {
        white:false
    });
</script>
<style lang="sass">
    .gdsc_logo
        height: 30px
        margin-left: 10px
        display: grid
        grid-template: auto / 25% 75%
        img
            grid-area: 1 / 1 / span 2
            height: 30px
            filter: drop-shadow(0px 0px 4px #0008)
        h1
            grid-area: 1 / 2
            font-size: 13px
            white-space: nowrap
            font-weight: 100
            line-height: 15px
            text-shadow: 0px 0px 10px #000
        h2
            grid-area: 2 / 2
            font-size: 10px
            white-space: nowrap
            margin: 0
            opacity: .75
            font-weight: 100
            text-shadow: 0px 0px 10px #000
        &.white
            color: #fff
</style>
<template>
    <div class="gdsc_logo mr-3" :style="$vuetify.display.mdAndUp ? 'width: 300px' : ''" :class="white ? 'white': ''">
        <img  src="/favicon.png" />
        <h1 v-if="$vuetify.display.mdAndUp">Google Developer Student Clubs</h1>
        <h2 v-if="$vuetify.display.mdAndUp">University of San Agustin</h2>
    </div>
</template>