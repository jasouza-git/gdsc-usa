<script setup lang="ts">
const formRegister = (value: any) => {
    console.log(value)
}
</script>

<template>
    <GDSC transparent>
        <Block img="group_photo.png">
            <h6>01 - GDSC</h6>
            <h1>Google Developer Student Clubs</h1>
            <h3>University of San Agustin</h3>
        </Block>
        <Block :w="$vuetify.display.smAndDown ? 1 : 2" :h="2">
            <div>
                <h3>02 - About GDSC USA</h3>
                <p>GDSC USA is a community group for Augustinian students interested in growing their technical
                    knowledge and applying it to real life situations to create solutions for local businesses and their
                    community.</p>
            </div>
            <Bubbles v-if="!$vuetify.display.smAndDown">
                <Bubble fill="/pop00.png" />
            </Bubbles>
            <Bubbles v-if="!$vuetify.display.smAndDown">
                <Bubble fill="/pop02.png" />
                <Bubble fill="/pop01.png" />
            </Bubbles>
            <div>
                <h3>03 - What We Do</h3>
                <p>As a program supported by Google Developers, students from all courses and year levels can join GDSC
                    USA. We arrange webinars, hold workshops, and engage in community building to help kickstart
                    careers!</p>
            </div>
        </Block>
        <Block>
            <h2>04 - GDSC Event Gallery</h2>
            <p>We arrange webinars, hold workshops, and engage in community building to help kickstart careers!</p>
            <input v-for="n in 5" :value="Math.random()" />
            <Slider>
                <div>
                    <img src="" />
                    <h6>2023-03-07 | University Week 2023 Alternative Class</h6>
                    <p>Gathering Augustinian tech enthusiasts, GDSC USA and Holotech Society arranged the alternative
                        classes, "Marketing Yourself: A Guide to Resume and Job Interviews" and "PC Building 101: A
                        Rundown on the Basics of Building Your Rigs," March 3. Augustinians engaged in interactive
                        classes at the University's Special Laboratory, with Ms. Ma. Ariessa Lane C. Ko on creating a
                        resumé and nailing job interviews and Mr. John Eric Benliro Tayco on the basics of PC building.
                    </p>
                </div>
            </Slider>
        </Block>
        <Block height="auto">
            <h2>Meet Our Team!</h2>
            <Deck>
                <Year name="2024-2025">
                </Year>
            </Deck>
        </Block>
        <Block>
            <v-container>
                <v-row class="mb-8">
                    <img class="mx-auto" src="/title.png" width="200" />
                </v-row>
                <v-row class="mb-8">
                    <h3 class="mx-auto">Be Part of the Community!</h3>
                </v-row>
                <v-row>
                    <v-col class="mx-auto" v-if="!$vuetify.display.smAndDown">
                        <Bubbles>
                            <Bubble fill="/pop02.png" />
                            <Bubble fill="/pop02.png" />
                        </Bubbles>
                    </v-col>
                    <v-col>
                        <h5 class="mb-2 mx-auto">Membership</h5>
                        <Form @submit="formRegister"  class="mx-auto"></Form>
                    </v-col>
                </v-row>
            </v-container>
        </Block>
    </GDSC>
</template>