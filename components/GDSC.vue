<script setup lang="ts">
    const info = withDefaults(defineProps<{
        title?: string;             // Title of the webpage
        transparent?: boolean;      // Transparent head at first block?
    }>(), {
        title: 'Google Developer Student Clubs',
        transparent: false,
    });
    useSeoMeta({
        title: info.title,
        ogTitle: 'Community group',
        ogImage: '@/assets/logo.png'
    });
    const active_page = ref<number>(0);
    /* ----- RECORD MOUSE FOR LATER COMPONENTS ----- */
    let mouse = ref<number[]>([-1,-1,-1,-1,0,0]); // [currentXY, draggedXY, scrollXY]
    let pagedim = ref<number[]>([0, 0]);
    let loaded = ref<boolean>(false);
    let paragraphs = ref<number>(0);
    provide('mouse', mouse);
    provide('pagedim', pagedim);
    provide('paragraphs', paragraphs);
    onMounted(() => {
        // Mouse
        document.addEventListener('mousedown', e => {
            mouse.value[0] = mouse.value[2] = e.clientX;
            mouse.value[1] = mouse.value[3] = e.clientY;
        });
        document.addEventListener('mousemove', e => {
            mouse.value[0] = e.clientX;
            mouse.value[1] = e.clientY;
        });
        document.addEventListener('mouseup', e => {
            mouse.value[2] = -1;
            mouse.value[3] = -1;
        });
        // Resize
        (onresize = () => {
            pagedim.value = [window.innerWidth, window.innerHeight];
        })();
        // Scroll
        document.addEventListener('scroll', e => {
            mouse.value[4] = window.scrollX;
            mouse.value[5] = window.scrollY;
        });
        // Loaded
        loaded.value = true;
    });
</script>
<template>
    <v-layout>
        <v-app-bar
            v-if="loaded"
            :color="transparent ? 'transparent' : 'primary'"
            :elevation="transparent ? 0 : 4"
            :flat="transparent"
            class="!p-2.5 bg-ns-fade"
            >

            <!--- Title Card -->
            <v-spacer></v-spacer>
            <Logo h="100px" />
            <v-list-item 
                v-if="pagedim[0] > 930"
                class="text-white text-shadow"
                title="Google Developer Student Clubs"
                subtitle="University of San Agustin"
                ></v-list-item>
            <v-spacer></v-spacer>

            <!-- Navigation Tabs -->
            <v-btn-toggle
                v-if="pagedim[0] > 500"
                color="primary"
                manditory
                dark 
                v-model="active_page"
                class="p-2 !bg-zinc-700 rounded-lg ripple-rygb"
                >
                <v-btn
                    v-for="(page, n) in ['Home', 'Events', 'About Us', 'Membership']"
                    :key="page"
                    :value="n"
                    class="!bg-zinc-700 text-white font-thin transition-all rounded-lg"
                    depressed
                    >
                    <v-icon v-if="pagedim[0] <= 650" :icon="'fa:fas fa-'+['home', 'calendar-days', 'circle-info', 'users'][n]" />
                    <span v-if="pagedim[0] > 650">{{page}}</span>
                </v-btn>
            </v-btn-toggle>
            <v-spacer></v-spacer>

            <!-- Search and Menu icons -->
            <v-btn v-if="pagedim[0] > 500" icon class="text-white text-shadow">
                <v-icon icon="fa:fas fa-magnifying-glass" />
            </v-btn>
            <v-btn v-if="pagedim[0] <= 500" icon class="text-white text-shadow">
                <v-icon icon="fa:fas fa-bars" />
            </v-btn>
            <v-spacer></v-spacer>
        </v-app-bar>
        <v-main class="pt-0 bg-grain">
            <!--- Main Page -->
            <slot v-if="loaded" />
            <!-- Loading Page -->
            <div class="fixed left-0 top-0 w-full h-full flex justify-center items-center pointer-events-none bg-grain"
                :style="`opacity: ${loaded ? 0 : 100}; transition: opacity 0.5s;`" >
                <Logo w="50vmin" border loading/>
            </div>
        </v-main>
    </v-layout>
</template>