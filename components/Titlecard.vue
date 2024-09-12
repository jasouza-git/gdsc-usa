<script setup lang="ts">
import { useDisplay } from 'vuetify';

    const info = withDefaults(defineProps<{
        white?: boolean,
        screenFit?: boolean
    }>(), {
        white: false,
        screenFit: true
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
    <!-- use ClientOnly to avoid "Hydration node mismatch" warning -->
    <ClientOnly>
        <div class="gdsc_logo mr-3" :style="shouldExpand() ? 'width: 300px' : ''" :class="white ? 'white': ''">
            <img src="/favicon.png" />
            <h1 v-if="shouldExpand()">Google Developer Student Clubs</h1>
            <h2 v-if="shouldExpand()">University of San Agustin</h2>
        </div>
    </ClientOnly>
</template>