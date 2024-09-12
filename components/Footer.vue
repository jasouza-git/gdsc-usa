<script setup lang="ts">
const titles = ["GDSC USA - Iloilo", "Projects", "Contact Us"]
const usaLinks = [
    {icon: 'mdi-facebook', link: ''}, 
    {icon: 'mdi-linkedin', link: ''}, 
    {icon: 'mdi-instagram', link: ''},
    {icon: 'mdi-twitter', link: ''}
]
const links = [
    [
        {title: "Home"} ,
        {title: "About Us"}
    ], [
        {title: "Events"}
    ], [
        {title: "gdsc-rso@usa.edu.ph"}
    ]
]

const goToLink = (url: string) => {
    window.open(url, '_blank');
};

</script>

<template>
    <Block icon grey>
        <v-container fluid>
            <v-row class="fill-height px-8" align="center" justify="center">
                <div style="height: 70px; width: 100%;"></div>
                <v-row align="start" justify="center">
                    <v-col class="mb-6 mx-5">
                        <v-row class="mx-auto">
                            <BotNav min-width="300" :titles="titles" :links="links"></BotNav>
                        </v-row>
                    </v-col>
                    <ClientOnly>
                        <v-col>
                            <v-row class="mx-auto" :style="$vuetify.display.mdAndUp ? 'width: 360px' : ''">
                                <v-col>
                                    <v-row>
                                        <div class="pl-6 mx-auto">
                                            <Titlecard :screenFit="false" />
                                        </div>
                                    </v-row>
                                    <v-row>
                                        <p class="mt-4 mx-auto" style="font-size: 11px;">General Luna St, Iloilo City
                                            Proper,
                                            Iloilo
                                            City, 5000 Iloilo</p>
                                    </v-row>
                                    <v-row class="px-6 mt-6">
                                        <v-col
                                            v-for="(t, i) in usaLinks">
                                            <v-btn icon density="comfortable" @click="goToLink(t.link)">
                                                <v-icon class="text-black" size="small">{{ t.icon }}</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-col>
                    </ClientOnly>
                </v-row>
                <div style="height: 70px; width: 100%;"></div>
            </v-row>
        </v-container>
    </Block>
</template>