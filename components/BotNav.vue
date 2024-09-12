<script setup lang="ts">
import { useDisplay } from 'vuetify';


const props = defineProps<{
    titles: string[],
    links: { title: string, link?: string }[][]
}>()

const goToLink = (url?: string) => {
    if (url !== null) window.open(url, '_blank');
};

const fontSize = () => useDisplay().mdAndUp.value ? 15 : useDisplay().smAndUp.value ? 13 : 12

</script>

<template>
    <v-container class="text-center pa-0">
        <ClientOnly>
            <v-row>
                <v-col class="px-0" v-for="(t, i) in titles">
                    <p class="mb-0 text-no-wrap" :style="`font-size: ${fontSize()}px; font-weight: 900; color: grey;`">
                        {{ t }}</p>
                    <v-list density="compact" class="bg-transparent ma-0 pa-0">
                        <v-divider :thickness="3"></v-divider>
                        <v-list-item :style="`font-size: ${fontSize()}px; color: grey;`" :active="false"
                            v-for="n in links[i]" rounded="shaped" :value="n.link" @click="goToLink(n.link)">{{ n.title
                            }}</v-list-item>
                    </v-list>
                </v-col>
            </v-row>
        </ClientOnly>
    </v-container>
</template>

<style lang="css" scoped>
.bg-transparent {
  background-color: transparent;
  box-shadow: none;
}
</style>