<script setup lang="ts">
    let info = withDefaults(defineProps<{
        img?:string,
        cols?:string,xl?:string,lg?:string,md?:string,sm?:string,xs?:string,
        parallax?:number,
        notag?:boolean,
        dark?:boolean,
    }>(), {
        img:'',
        cols:'1',xl:'',lg:'',md:'',sm:'',xs:'',
        parallax:0.5,
        notag:false,
        dark:false,
    });
    let mouse:globalThis.Ref<number[]> = inject('mouse', ref([-1,-1,-1,-1,0,0])); // MouseXY, DraggedXY, ScrollXY
    let pagedim:globalThis.Ref<number[]> = inject('pagedim', ref([1000,1000]));
    // cols || '1'
</script>
<template>
    <v-container fluid :class="'relative min-h-screen flex '+(dark ? 'text-white' : 'text-black bg-carto')">
        <!-- Top toggle -->
        <div v-if="!notag" :class="'absolute top-0 left-1/2 w-[100px] h-[100px] flex justify-center items-center inline-block rounded-full z-0 -translate-x-1/2 -translate-y-1/2 '+(dark ? 'bg-grain' : 'bg-carto')" style="background-position: calc(56px - 50vw) 50px">
            <Logo h="90px" :dark="!dark" :blur="0" />
        </div>
        <!-- Background image -->
        <div v-if="img" class="absolute left-0 top-0 w-full h-full bg-cover bg-overlay bg-fixed opacity-25"
            :style="img ? `background-image: url('${img}'); background-position: 50% calc(50% - ${mouse[5]*parallax}px)` : ''"/>
        <!-- Grid -->
        <v-row dense>
            <v-col :style="`
                display: grid;
                grid-template: auto /${
                    ' auto'.repeat(Number(
                        pagedim[0] <  600 && xs.length ? xs :
                        pagedim[0] <  960 && sm.length ? sm :
                        pagedim[0] < 1280 && md.length ? md :
                        pagedim[0] < 1920 && lg.length ? lg :
                        pagedim[0] < 2560 && xl.length ? xl :
                        cols.length                   ? cols :
                        '1'
                    ))
                };`">
                <slot />
            </v-col>
        </v-row>
    </v-container>
</template>