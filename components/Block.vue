<script setup lang="ts">
    const block = ref<HTMLDivElement | null>(null);
    const info = withDefaults(defineProps<{
        dark?: boolean;
        theme?: string;
        img?: string;
        w?: number;
        h?: number;
    }>(), {
        dark: false,
        w: 0,
        h: 0,
    });
    function stylize() {
        let style:any = {};
        if (info.w || info.h) Object.assign(style, {
            display: 'grid',
            gridTemplateRows: info.h ? `repeat(${info.h}, 1fr)` : 'auto',
            gridTemplateColumns: info.w ? `repeat(${info.w}, 1fr)` : 'auto',
            gap: '10px',
        });
        if (info.img) Object.assign(style, {
            backgroundImage: `url(${info.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#12181ADD',
            backgroundBlendMode: 'overlay',
            color: '#fff',
        });
        return style;
    }
    onMounted(() => {
        if (!block.value) return;
        Array(...block.value.querySelectorAll('[w],[h]')).forEach(d => {
            if (!(d instanceof HTMLElement)) return;
            d.style.gridArea = `span ${d.hasAttribute('h') ? d.getAttribute('h') : 1} / span ${d.hasAttribute('w') ? d.getAttribute('w') : 1}`;
        })
    })
</script>
<style lang="sass">
    .block
        min-height: 100vh
        position: relative
        background-color: #fff
        color: #000
        h1,h2,h3,h4,h5,h6
            white-space: nowrap
            text-align: center
        p
            text-align: center
        &:not(:first-child)::before
            content: ''
            position: absolute
            top: -50px
            left: calc(50% - 25px)
            width: 100px
            height: 100px
            border-radius: 50%
            background: inherit
            background-image: url('/favicon_white.png')
            background-size: 60%
            background-position: center
            background-repeat: no-repeat
        &:nth-child(even)
            background-color: #12181A
            color: #fff
        &:nth-child(odd)::before
            background-image: url('/favicon_dark.png')
        &>div
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: 100%
            display: flex
            align-items: center
            justify-content: center
            flex-direction: column
            font-size: 150%
        &>div>div
            padding: 2vw
</style>
<template>
    <v-container fluid class="block">
        <div :style="stylize()" ref="block">
            <slot></slot>
        </div>
    </v-container>
</template>