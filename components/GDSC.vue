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
<template>
    <v-layout>
        <v-app-bar
            :color="transparent ? 'transparent' : 'primary'"
            :elevation="transparent ? 0 : 4"
            :flat="transparent"
            class="p-2.5 bg-ns-fade"
        >
            <Logo />
            <v-list-item title="Google Developer Student Clubs" subtitle="University of San Agustin"></v-list-item>
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
            <!--<slot></slot>-->
        </v-main>
    </v-layout>
</template>