<script setup lang="ts">
import favicon_dark from "~/assets/favicon_dark.png"
import favicon_white from "~/assets/favicon_white.png"

const props = withDefaults(defineProps<{
    dark?: boolean,
    grey?: boolean,
    icon?: boolean,
    img?: string
}>(), {
    dark: false,
    grey: false,
    icon: false
})
</script>

<template>
    <v-container fluid :style="img ? `background-color: #12181ADD; background-image: url(${img})` : ''"
        :class="'py-0 px-0 fill-width ' + 'fill-width ' + (img ? 'bg-image ' : '') + (grey ? 'z-bg-grey text-black' : (dark ? 'i-bg-gray text-white' : 'bg-white text-black'))">
        <div v-if="icon" :class="'border-circle ' + (grey ? 'z-bg-grey' : dark ? 'i-bg-gray' : 'bg-white')">
            <v-img class="icon mx-auto" :src="dark ? favicon_white : favicon_dark"></v-img>
        </div>
        <v-row class="mx-0 my-0 px-0 py-0" no-gutters>
            <v-col class="py-0 px-0 mx-0 my-0 text-center d-flex align-center justify-center">
                <slot />
            </v-col>
        </v-row>
    </v-container>
</template>

<style lang="css" scoped>
.bg-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    color: #fff;
}

.border-circle {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon {
    width: 30px;
    height: 30px;
}

.i-bg-gray {
    background-color: #12181A;
}

.z-bg-grey {
    background-color: #D9D9D9;
}
</style>