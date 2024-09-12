<script setup lang="ts">

import type { Member } from '~/components/Member'
import { alterColors, ColorAdjustParas, randomColor } from './ColorFunctions';
import { useDisplay } from 'vuetify';

const colorLightenLvl = 4
var cardColors = alterColors(ColorAdjustParas.lighten, colorLightenLvl)

type PositionGroup = {
    position: string,
    member: Member[]
}

const yearLvl = defineModel<string>("yearLvl")

const fetchDatas = async (year: string): Promise<PositionGroup[]> => {
    loading.value = true
    loadingColors.value = randomLoadingColor()
    await sleep(2000)
    loading.value = false
    return [
        {
            position: "Lead",
            member: [
                {
                    name: year,
                    position: "Lead",
                    avatar: null,
                    color: "bg-blue",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    fbLink: "https://www.facebook.com/chenlin.wang.16100/",
                    lnLink: "https://www.facebook.com/chenlin.wang.16100/",
                    itLink: "https://www.facebook.com/chenlin.wang.16100/"
                },
            ]
        }, {
            position: "Co-Lead",
            member: [
                {
                    name: year,
                    position: "Co-Lead",
                    avatar: null,
                    color: "bg-blue",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    fbLink: "https://www.facebook.com/chenlin.wang.16100/",
                    lnLink: "https://www.facebook.com/chenlin.wang.16100/",
                    itLink: "https://www.facebook.com/chenlin.wang.16100/"
                },
            ]
        }, {
            position: "Asst. Executive Secretary",
            member: [
                {
                    name: year,
                    position: "Asst. Executive Secretary",
                    avatar: null,
                    color: "bg-blue",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    fbLink: "https://www.facebook.com/chenlin.wang.16100/",
                    lnLink: "https://www.facebook.com/chenlin.wang.16100/",
                    itLink: "https://www.facebook.com/chenlin.wang.16100/"
                }, {
                    name: "Member Name",
                    position: "Asst. Executive Secretary",
                    avatar: null,
                    color: "bg-red",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    fbLink: "https://www.facebook.com/chenlin.wang.16100/",
                    lnLink: "https://www.facebook.com/chenlin.wang.16100/",
                }, {
                    name: year,
                    position: "Asst. Executive Secretary",
                    avatar: null,
                    color: "bg-blue",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    fbLink: "https://www.facebook.com/chenlin.wang.16100/",
                    lnLink: "https://www.facebook.com/chenlin.wang.16100/",
                    itLink: "https://www.facebook.com/chenlin.wang.16100/"
                }, {
                    name: "Member Name",
                    position: "Asst. Executive Secretary",
                    avatar: null,
                    color: "bg-red",
                    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    fbLink: "https://www.facebook.com/chenlin.wang.16100/",
                    lnLink: "https://www.facebook.com/chenlin.wang.16100/",
                },
            ]
        }
    ]
}

const randomLoadingColor = (): string[] => {
    return [0, 1, 2, 3, 4, 5].map(i => {
        const res = randomColor(cardColors)
        if (res.remainingColors.length === 0) { cardColors = alterColors(ColorAdjustParas.lighten, colorLightenLvl) }
        else { cardColors = res.remainingColors }
        return res.color
    })
    
}

const datas = ref<PositionGroup[]>([])
const loading = ref(true)
const { data: loadingColors} = await useAsyncData('makeLoadingColors', async () => randomLoadingColor())
const { data: years } = await useAsyncData('fetchYearLabels', async () => ['2019 - 2020', '2020 - 2021', '2021 - 2022', '2022 - 2023', '2023 - 2024'])

onMounted(() => {
    yearLvlChanged(yearLvl.value)
})

const yearLvlChanged = (yearL?: string) => {
    if (yearL) fetchDatas(yearL)
        .then(res => {
            datas.value = res
        })
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const isSmallScreen = () => useDisplay().width.value < 400

</script>

<template>
    <v-container>
        <v-row style="width: 160px" class="mx-auto">
            <v-select single-line density="compact" variant="solo" rounded :items="years as string[]"
                :disabled="loading" @update:model-value="yearLvlChanged($event as string)" v-model="yearLvl"
                style="text-align: center;"></v-select>
        </v-row>
        <ClientOnly>
            <v-row v-if="!loading" v-for="(p, i) in datas" no-gutters>
                <v-row v-if="p.member.length === 1" no-gutters>
                    <v-col :class="'pa-0 ' + (isSmallScreen() ? 'ma-2' : 'ma-5')">
                        <Card class="mx-auto" :member="/* @ts-ignore */p.member[0]"></Card>
                    </v-col>
                </v-row>

                <v-data-iterator class="mx-auto" v-if="p.member.length > 1" :items="p.member">
                    <template v-slot:default="{ items }">
                        <v-row no-gutters>
                            <v-col :class="'pa-0 ' + (isSmallScreen() ? 'ma-2' : 'ma-5')"
                                v-for="(member, index) in items" :key="index">
                                <Card class="mx-auto" :member="/* @ts-ignore */member.raw"></Card>
                            </v-col>
                        </v-row>
                    </template>
                </v-data-iterator>
            </v-row>
            <v-row v-else no-gutters>
                <v-col v-for="(color, k) in loadingColors">
                    <v-skeleton-loader :color="color" style="border-radius: 10px;" :elevation="12"
                        :class="'border mx-auto pa-0 ' + (isSmallScreen() ? 'my-2' : 'my-5')" width="320" height="190"
                        type="list-item-avatar-three-line, paragraph"></v-skeleton-loader>
                </v-col>
            </v-row>
        </ClientOnly>
    </v-container>
</template>

<style lang="css" scoped>
::v-deep(.v-field__field) {
    margin-left: 18px;
}

::v-deep(.v-field__append-inner) {
    width: 0px;
}

::v-deep(.v-select .mdi:before, .mdi-set ) {
    visibility: hidden
}
</style>