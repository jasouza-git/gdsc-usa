<script setup lang="ts">
    type Color = "red" | "yellow" | "green" | "blue";
    const info = withDefaults(defineProps<{
        amount?:number,                                 // Number of Bubbles
        colors?:Color[],                                // Color classes
        imgOff?:number,                                 // Image Offset
        bubOff?:number,                                 // Bubble Offset
        durVar?:number,                                 // Transition Variety (miliseconds)
        durOff?:number,                                 // Transition Offset (miliseconds)
    }>(), {
        amount: 15,
        // @ts-ignore
        colors:['red','yellow','green','blue'],
        imgOff: 50,
        bubOff: 20,
        durVar: 500,
        durOff: 250,
    });
    let area = ref<number[]>([Math.random()*Math.PI, 0]); // Random Angle Offset, Number of focused bubbles
    provide('area', area);
    let observer:IntersectionObserver|null = null;
    let bubbles = ref<HTMLDivElement|null>(null);
    onMounted(() => {
        if (!bubbles.value) return;
        observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                setTimeout(() => {
                    entry.target.classList.remove('a500');
                    entry.target.classList.add('a300');
                    setTimeout(() => {
                        entry.target.classList.remove('a300');
                        entry.target.classList.add('a100');
                        setTimeout(() => {
                            entry.target.classList.remove('a100');
                            entry.target.classList.add('a050');
                            setTimeout(() => entry.target.classList.remove('a050'), 50);
                        }, 50);
                    }, 200);
                }, 200);
                observer?.disconnect();
            };
        }), {
            root: null,
            rootMargin: '0px',
            threshold: 1
        });
        observer.observe(bubbles.value);
    });
</script>
<style lang="sass">
    .bubbles
        position: relative
        width: 100%
        height: 100%
        *
            left: 50%
            top: 50%
        &.hidden *
            width: 0!important
            height: 0!important
            transform: translate(-50%, -50%)!important
        // I cant find a way to elliminate linear animation
        // on dynamic positioning, so brute force it is
        &.a500 *
            transition: .5s
        &.a300 *
            transition: .3s
        &.a100 *
            transition: .1s
        &.a050 *
            transition: .05s
</style>
<template>
    <div class="bubbles hidden a500" ref="bubbles">
        <!-- (Math.pow(2*Math.random()-1,2)/2+0.5)*20-10 -->
        <Bubble v-for="n in info.amount" 
            :fill="info.colors[Math.floor(Math.random()*info.colors.length)]"
            :x="Math.random()*info.bubOff-info.bubOff/2"
            :y="Math.random()*info.bubOff-info.bubOff/2"
            :z="Math.round(Math.random()*75)+25"
            :f="n/info.amount/4"
            back
        />
        <slot></slot>
    </div>
</template>