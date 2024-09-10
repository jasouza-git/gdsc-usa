<script setup lang="ts">

const members = [
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
    }
]

onMounted(() => {
    console.log(members)
})
  
</script>

<template>
    <v-container>
      <v-row >
        <v-col v-for="(member, index) in members" :key="index">
            <Card class="mx-auto" :member="member"></Card>
        </v-col>
      </v-row>
    </v-container>
</template>
  