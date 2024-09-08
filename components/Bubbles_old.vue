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
        amount: 10,
        // @ts-ignore
        colors:['red','yellow','green','blue'],
        imgOff: 50,
        bubOff: 250,
        durVar: 500,
        durOff: 250,
    });
    const bubble = ref<HTMLDivElement | null>(null);
    let observer = null;

    onMounted(() => {
        if (!bubble.value) return;
        // Create bubbles
        for (var i = 0; i < info.amount; i++) {
            const d = document.createElement('div');
            d.classList.add(info.colors[Math.floor(Math.random() * info.colors.length)]);
            d.classList.add('pop');
            d.setAttribute('data-x', '0');
            d.setAttribute('data-y', '0');
            d.style.transition = `${(Math.random()*info.durVar+info.durOff)/1000}s`;
            bubble.value.appendChild(d);
        }
        Array(...bubble.value.querySelectorAll('img')).forEach(d => {
            d.setAttribute('data-x', '0');
            d.setAttribute('data-y', '0');
            d.style.transition = `${(Math.random()*info.durVar+info.durOff)/1000}s`;
        });
        // Animate bubbles on popup or popout
        observer = new IntersectionObserver(entries => entries.forEach(entry => {
            let imgs:HTMLElement[] = Array.from(entry.target.querySelectorAll('img'));
            let bubs:HTMLElement[] = Array.from(entry.target.querySelectorAll('.pop'));
            let angl = Math.random()*Math.PI;
            // Popups and Popouts
            bubs.forEach(dom => setTimeout((d,int) => {
                let z = int ? Math.round(Math.random()*75)+25 : 0;
                d.style.width = `${z}px`;
                d.style.height = `${z}px`;
                d.setAttribute('data-x', !int ? '0' : String(Math.pow(Math.random(),2)*info.bubOff-info.bubOff/2));
                d.setAttribute('data-y', !int ? '0' : String(Math.pow(Math.random(),2)*info.bubOff-info.bubOff/2));
                d.style.marginLeft = `${d.getAttribute('data-x')}px`;
                d.style.marginTop = `${d.getAttribute('data-y')}px`;
            }, Math.random()*info.durVar, dom, entry.isIntersecting));
            imgs.forEach((img,n) => setTimeout((d,n,int) => {
                d.style.width = int ? '200px' : '0';
                d.style.height = int ? '200px' : '0';
                d.setAttribute('data-x', imgs.length == 1 || !int ? '0' : String(Math.cos(n*2*Math.PI/imgs.length+angl)*info.imgOff));
                d.setAttribute('data-y', imgs.length == 1 || !int ? '0' : String(Math.cos(n*2*Math.PI/imgs.length+angl)*info.imgOff));
                d.style.marginLeft = `${d.getAttribute('data-x')}px`;
                d.style.marginTop = `${d.getAttribute('data-y')}px`;
            }, Math.random()*info.durVar, img, n, entry.isIntersecting));
        }), {
            root: null,
            rootMargin: '0px',
            threshold: 1
        });
        observer.observe(bubble.value);
    });
</script>
<style lang="sass">
    .bubbles
        position: relative
        *
            position: absolute
            left: 50%
            display: inline-block
            width: 0
            height: 0
            border-radius: 50%
            transform: translate(-50%, -50%)
            box-shadow: 0 0 5px #12181ADD
        div
            opacity: .88
            transition: .5s
            &.red
                background-color: #EA4335
            &.yellow
                background-color: #FBBC04
            &.green
                background-color: #34A853
            &.blue
                background-color: #4285F4
        img
            z-index: 1
</style>
<template>
    <div ref="bubble" class="bubbles">
        <slot></slot>
    </div>
</template>