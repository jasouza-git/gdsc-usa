<template>
    <v-carousel hide-delimiters show-arrows-on-hover class="card-carousel pointer-events-none">
        <template v-slot:prev="{ props }">
            <v-btn variant="elevated" @click="props.onClick" style="width:60px; height:64px; border-radius:50%">
                <Logo :blur="0" show="left" h="50px" />
            </v-btn>
        </template>
        <template v-slot:next="{ props }">
            <v-btn variant="elevated" @click="props.onClick" style="width:60px; height:64px; border-radius:50%">
                <Logo :blur="0" show="right" h="50px" />
            </v-btn>
        </template>
        <slot />
    </v-carousel>
</template>