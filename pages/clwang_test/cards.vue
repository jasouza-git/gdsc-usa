<script setup lang="ts">
import { I_CardColors, alterColors, randomColor } from '../../components/ColorFunctions.ts';
const loading = ref(true)
const colorLightenLvl = 4
var cardColors = alterColors(I_CardColors, "lighten", colorLightenLvl)
const members = ref([
    {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-blue",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        fbLink: "https://www.facebook.com/chenlin.wang.16100/",
        lnLink: "https://www.facebook.com/chenlin.wang.16100/",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
    },
    {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-red",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        fbLink: "https://www.facebook.com/chenlin.wang.16100/",
        lnLink: "https://www.facebook.com/chenlin.wang.16100/",
    },
    {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-purple",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
    },
    {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-green",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
    },
    {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-black",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
    },
    {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-orange",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
    },
    {
        name: "Member Name",
        position: "Member position",
        avatar: null,
        color: "bg-purple",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itLink: "https://www.facebook.com/chenlin.wang.16100/"
    }
])
const getRandomColor = () => {
    const res = randomColor(cardColors)
    if (res.remainingColors.length === 0) { cardColors = alterColors(I_CardColors, "lighten", colorLightenLvl) }
    else { cardColors = res.remainingColors }
    return res.color
}
</script>

<template>
    <v-container>
        <v-data-iterator :items="members" :items-per-page="6" :loading="loading">
            <template v-slot:header>
                <v-container>
                    <v-btn density="comfortable" variant="tonal"
                    rounded @click="loading = !loading">loading off/on</v-btn>
                </v-container>
            </template>

            <template v-slot:default="{ items }">
                <v-row>
                    <v-col v-for="(member, index) in items" :key="index">
                        <Card class="mx-auto" :member="member.raw"></Card>
                    </v-col>
                </v-row>
            </template>

            <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                <div class="d-flex align-center justify-center pa-4">
                    <v-btn :disabled="page === 1" density="comfortable" icon="mdi-arrow-left" variant="tonal" rounded
                        @click="prevPage"></v-btn>

                    <div class="mx-2 text-caption">
                        Page {{ page }} of {{ pageCount }}
                    </div>

                    <v-btn :disabled="page >= pageCount" density="comfortable" icon="mdi-arrow-right" variant="tonal"
                        rounded @click="nextPage"></v-btn>
                </div>
            </template>

            <template v-slot:loader>
                <v-row>
                    <v-col v-for="(_, k) in [0, 1, 2, 3, 4, 5]" :key="k">
                        <v-skeleton-loader :color="getRandomColor()" style="border-radius: 10px;" :elevation="12" class="border mx-auto" width="320" height="190" type="list-item-avatar-three-line, paragraph"></v-skeleton-loader>
                    </v-col>
                </v-row>
            </template>
        </v-data-iterator>

    </v-container>
</template>