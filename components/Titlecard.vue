<script setup lang="ts">
import { useDisplay } from 'vuetify';

    const info = withDefaults(defineProps<{
        white?: boolean,
        screenFit?: boolean,
        shadow?: boolean
    }>(), {
        white: false,
        screenFit: true,
        shadow: false
    });

// import.meta.client used to detect ssr or csr, avoid the "Hydration node mismatch" warning
const shouldExpand = () => import.meta.client ? (info.screenFit ? useDisplay().mdAndUp.value : true) : true

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
            // filter: drop-shadow(0px 0px 4px #0008)
        h1
            grid-area: 1 / 2
            font-size: 13px
            white-space: nowrap
            font-weight: 400
            line-height: 15px
            // 
        h2
            grid-area: 2 / 2
            font-size: 10px
            white-space: nowrap
            margin: 0
            opacity: .75
            font-weight: 400
            // text-shadow: 0px 0px 10px #000
        &.white
            color: #fff
</style>
<template>
    <!-- use ClientOnly to avoid "Hydration node mismatch" warning -->
    <ClientOnly>
        <div class="gdsc_logo mr-3 text-start"  :style="(shouldExpand() ? 'width: 300px ' : ' ')" :class="white ? 'white': ''">
            <img src="/favicon.png" :style="shadow ? 'filter: drop-shadow(0px 0px 4px #0008)' : ''"/>
            <h1 v-if="shouldExpand()" :style="shadow ? 'text-shadow: 0px 0px 10px #000' : ''">Google Developer Student Clubs</h1>
            <h2 v-if="shouldExpand()" :style="shadow ? 'text-shadow: 0px 0px 10px #000' : ''">University of San Agustin</h2>
        </div>
    </ClientOnly>
</template>