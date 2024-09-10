<script setup lang="ts">
import defaultAvatar from '~/assets/avatar.png';
const props = defineProps<{
    member: {
        name: string,
        position: string,
        avatar?: string,
        color?: string,
        summary?: string,
        fbLink?: string,
        lnLink?: string,
        itLink?: string
    }
}>()

const goToLink = (url: string) => {
    window.open(url, '_blank');
};
</script>

<template>
    <v-card width="320" elevation="12" style="border-radius: 10px;">
        <v-row no-gutters class="py-1">
            <v-col cols="auto" class="d-flex justify-center align-center">
                <v-avatar class="ma-2 ml-3 mr-0" :image="member.avatar || defaultAvatar" size="125"></v-avatar>
            </v-col>
            <v-col>
                <v-row no-gutters class="d-flex align-center mt-1">
                    <v-col class="mr-2">
                        <v-card-title class="my-0 py-0 name-overflow"
                            style="font-size: 15px; font-weight: 400; color: black;">
                            {{ member.name }}
                        </v-card-title>
                    </v-col>
                    <v-col cols="auto mr-2">
                        <v-img src="~assets/logo.png" width="25"></v-img>
                    </v-col>
                </v-row>
                <v-card-title class="my-0 pt-0 name-overflow" style="font-size: 15px; font-weight: 900; color: black;">
                    {{ member.position }}
                </v-card-title>
                <v-card-text style="font-size: 10px; font-weight: 400; color: black;">
                    {{ member.summary ?? "Biography not found. Maybe they’re a secret agent?" }}
                </v-card-text>
            </v-col>
        </v-row>

        <v-card-actions :class="`${member.color || 'bg-red'} small-card-actions d-flex justify-end pa-0 ma-0`">
            <v-btn icon v-if="member.fbLink" @click="goToLink(member.fbLink ?? '')">
                <v-icon size="small">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon v-if="member.lnLink" @click="goToLink(member.lnLink ?? '')">
                <v-icon size="small">mdi-linkedin</v-icon>
            </v-btn>
            <v-btn icon v-if="member.itLink" @click="goToLink(member.itLink ?? '')">
                <v-icon size="small">mdi-instagram</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<style lang="css" scoped>
.name-overflow {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.small-card-actions {
    height: 35px !important;
    min-height: 35px !important;
    padding: 0px;
}
</style>
