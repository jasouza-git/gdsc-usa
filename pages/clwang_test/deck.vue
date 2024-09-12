<script setup lang="ts">
const year = ref('2023 - 2024')
</script>

<template>
    <v-container>
        <div style="height: 100px; width: 100%;"></div>
        <Deck v-model:yearLvl="year"></Deck>
        <div style="height: 100px; width: 100%;"></div>
    </v-container>

</template>