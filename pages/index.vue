<script setup lang="ts">
import { useDisplay } from 'vuetify';

const formRegister = (value: any) => {
    console.log(value)
}

const decideFormWidth = () => {
    const w = useDisplay().width.value
    return w < 430 ? 340 :
        useDisplay().smAndDown.value ? 420 : 500
}

// get the random number using "useAsyncData" function, ensure the data gathered at server side.
// avoid "Hydration node mismatch" warning
const { data: randomNums } = await useAsyncData("randomNums", async () => [1, 2, 3, 4, 5].map(i => Math.random()))

const year = ref('2023 - 2024')

watch(randomNums, () => {
    console.log(randomNums)
})

</script>

<template>
    <Block dark img="group_photo.png">
        <v-container fluid style="height: 100vh;">
            <v-row class="fill-height px-8" align="center" justify="center">
                <v-col>
                    <h6>01 - GDSC</h6>
                    <h1>Google Developer Student Clubs</h1>
                    <h3>University of San Agustin</h3>
                </v-col>
            </v-row>
        </v-container>
    </Block>
    <Block dark icon>
        <!-- use ClientOnly to avoid "Hydration node mismatch" warning -->
        <ClientOnly>
            <v-container fluid style="height: 100vh;" :min-height="$vuetify.display.smAndDown ? '400px' : '800px'">
                <v-row class="fill-height px-8" align="center" justify="center">
                    <div style="height: 50px"></div>
                    <v-row>
                        <v-col>
                            <h3>02 - About GDSC USA</h3>
                            <p>GDSC USA is a community group for Augustinian students interested in growing their
                                technical
                                knowledge and applying it to real life situations to create solutions for local
                                businesses and
                                their
                                community.</p>
                        </v-col>
                        <v-col v-if="!$vuetify.display.smAndDown">
                            <Bubbles>
                                <Bubble fill="/pop00.png" />
                            </Bubbles>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col v-if="!$vuetify.display.smAndDown">
                            <Bubbles>
                                <Bubble fill="/pop02.png" />
                                <Bubble fill="/pop01.png" />
                            </Bubbles>
                        </v-col>
                        <v-col>
                            <h3>03 - What We Do</h3>
                            <p>As a program supported by Google Developers, students from all courses and year levels
                                can join
                                GDSC
                                USA. We arrange webinars, hold workshops, and engage in community building to help
                                kickstart
                                careers!</p>
                        </v-col>
                    </v-row>
                    <div style="height: 50px"></div>
                </v-row>
            </v-container>
        </ClientOnly>
    </Block>
    <Block icon>
        <v-container fluid style="height: 100vh;" min-height="500px">
            <v-row class="fill-height py-10 px-8" align="center" justify="center">
                <v-col>
                    <h2>04 - GDSC Event Gallery</h2>
                    <p class="mb-4">We arrange webinars, hold workshops, and engage in community building to help
                        kickstart careers!
                    </p>
                    <v-row align="center" justify="center" v-for="(n, i) of randomNums" :key="i">
                        <input :value="n"></input>
                    </v-row>
                    <Slider />
                </v-col>
            </v-row>
        </v-container>
    </Block>
    <Block dark icon>
        <v-container fluid min-height="500px">
            <v-row class="fill-height py-10" align="center" justify="center">
                <v-col>
                    <v-row class="mt-8 mb-10">
                        <h2 class="mx-auto">Meet Our Team!</h2>
                    </v-row>
                    <v-row>
                        <Deck v-model:yearLvl="year"></Deck>
                    </v-row>
                </v-col>
            </v-row>
            <div style="height: 50px"></div>
        </v-container>
    </Block>
    <Block icon>
        <v-container fluid min-height="500px">
            <div style="height: 50px"></div>
            <ClientOnly>
                <v-row class="mb-8">
                    <img class="mx-auto" src="/title.png" :width="decideFormWidth() / 2" />
                </v-row>
            </ClientOnly>
            <v-row class="mb-8">
                <h3 class="mx-auto">Be Part of the Community!</h3>
            </v-row>
            <v-row>
                <!-- use ClientOnly to avoid "Hydration node mismatch" warning -->
                <ClientOnly>
                    <v-col class="mx-auto" v-if="!$vuetify.display.smAndDown">
                        <Bubbles>
                            <Bubble fill="/pop02.png" />
                            <Bubble fill="/pop02.png" />
                        </Bubbles>
                    </v-col>
                    <v-col>
                        <h5 class="mb-2 mx-auto">Membership</h5>
                        <Form :width="decideFormWidth()" @submit="formRegister" class="mx-auto"></Form>
                    </v-col>
                </ClientOnly>
            </v-row>
            <div style="height: 70px"></div>
        </v-container>
    </Block>
</template>