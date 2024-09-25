<script setup lang="ts">
    const info = withDefaults(defineProps<{
        img?:string,
        head?:string,
        date?:string,
    }>(), {
        img: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        head: 'Testing',
        date: '2024',
    })
</script>
<template>
    <v-carousel-item>
        <v-row dense>
            <v-col>
                <v-card class="w-96 m-auto pointer-events-auto">
                    <v-img height="200px" :src="img" cover />
                    <v-card-title>{{ head }}</v-card-title>
                    <v-card-subtitle>{{ date }}</v-card-subtitle>
                    <v-card-text>
                        <div><slot /></div>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-carousel-item>
</template>