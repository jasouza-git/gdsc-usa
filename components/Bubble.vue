<script setup>
    // Config
    const bubbles = 10;                                 // No. of Bubbles
    const dur = ()=>Math.random()*500+250;              // Transition
    const colors = ['red', 'yellow', 'green', 'blue'];  // Color Classes
    const imgOff = 50;                                  // Image Offset
    const bubOff = 250;                                  // Bubble Offset

    // Code
    const bubble = ref(null);
    let observer = null;

    onMounted(() => {
        // Create bubbles
        for (var i = 0; i < bubbles; i++) {
            const d = document.createElement('div');
            d.classList.add(colors[Math.floor(Math.random() * colors.length)]);
            d.classList.add('pop');
            d.style.transition = `${dur()/1000}s`;
            bubble.value.appendChild(d);
        }
        Array(...bubble.value.querySelectorAll('img')).forEach(d => {
            d.style.transition = `${dur()/1000}s`;
        });
        observer = new IntersectionObserver(entries => entries.forEach(entry => {
            let imgs = Array(...entry.target.querySelectorAll('img'));
            let bubs = Array(...entry.target.querySelectorAll('.pop'));
            let angl = Math.random()*Math.PI;
            // Popups and Popouts
            bubs.forEach(dom => setTimeout((d,int) => {
                let z = int ? Math.round(Math.random()*75)+25 : 0;
                d.style.width = `${z}px`;
                d.style.height = `${z}px`;
                d.style.marginLeft = int ? `${Math.pow(Math.random(),2)*bubOff-bubOff/2}px` : '0';
                d.style.marginTop = int ? `${Math.pow(Math.random(),2)*bubOff-bubOff/2}px` : '0';
            }, dur(), dom, entry.isIntersecting));
            imgs.forEach((img,n) => setTimeout((d,n,int) => {
                d.style.width = int ? '200px' : '0';
                d.style.height = int ? '200px' : '0';
                d.style.marginLeft = imgs.length == 1 || !int ? '0' : `${Math.cos(n*2*Math.PI/imgs.length+angl)*imgOff}px`;
                d.style.marginTop = imgs.length == 1 || !int ? '0' : `${Math.sin(n*2*Math.PI/imgs.length+angl)*imgOff}px`;
            }, dur(), img, n, entry.isIntersecting));
        }), {
            root: null,
            rootMargin: '0px',
            threshold: 1
        });
        observer.observe(bubble.value);
    });
</script>
<style lang="sass">
    .bubble
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
    <div ref="bubble" class="bubble">
        <slot></slot>
    </div>
</template>