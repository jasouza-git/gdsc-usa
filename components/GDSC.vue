<script setup lang="ts">
    const info = withDefaults(defineProps<{
        title?: string;             // Title of the webpage
        transparent?: boolean;      // Transparent head at first block?
    }>(), {
        title: 'Google Developer Student Clubs',
        transparent: false,
    });
    const pages:string[] = ['Home', 'Events', 'About Us', 'Membership'];
    const active_page = ref<string>(pages[0]);
    useSeoMeta({
        title: info.title,
        ogTitle: 'Community group',
        ogImage: '@/assets/logo.png'
    });
    /* ----- RECORD MOUSE FOR LATER COMPONENTS ----- */
    let mouse = ref<number[]>([-1,-1,-1,-1]); // [currentXY, draggedXY]
    provide('mouse', mouse);
    onMounted(() => {
        document.addEventListener('mousedown', e => {
            mouse.value = [e.clientX, e.clientY, e.clientX, e.clientY];
        });
        document.addEventListener('mousemove', e => {
            mouse.value[0] = e.clientX;
            mouse.value[1] = e.clientY;
        });
        document.addEventListener('mouseup', e => {
            mouse.value[2] = -1;
            mouse.value[3] = -1;
        });
    });
</script>
<style lang="sass">
    @font-face
        font-family: 'Google Sans'
        src: url(https://fonts.gstatic.com/s/googlesans/v61/4UasrENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RPjIUvQ.woff2) format('woff2')
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD
    *
        font-family: 'Google Sans', sans-serif
    .v-app-bar
        padding: 1.5vw
        background-image: linear-gradient(#0009, #0007, #0000)!important
    .v-btn-toggle
        padding: 10px
        background-color: #3C4042!important
        border-radius: 20px!important
        .v-btn
            background-color: #3C4042
            color: #fff
            font-weight: 100
            transition: background-color .25s, color .25s linear .125s
            border-radius: 15px!important
        .v-btn.v-btn--active
            background-color: #fff!important
            color: #3C4042!important
            font-weight: 700
    .v-icon
        color: #fff
</style>
<template>
    <v-layout>
        <v-app-bar
            :color="transparent ? 'transparent' : 'primary'"
            :elevation="transparent ? 0 : 4"
            :flat="transparent"
            class="head"
        >
            <Titlecard :white="transparent" />
            <v-spacer></v-spacer>
            <!-- NAVIGATION BUTTONS -->
            <v-btn-toggle color="primary" manditory dark v-model="active_page">
                <v-btn v-for="page in pages" :key="page" :value="page" depressed>{{ page }}</v-btn>
            </v-btn-toggle>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main style="padding-top: 0">
            <slot></slot>
        </v-main>
    </v-layout>
</template>