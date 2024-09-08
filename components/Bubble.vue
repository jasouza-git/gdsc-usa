<script setup lang="ts">
    const bubble = ref<HTMLDivElement | null>(null);
    const info = withDefaults(defineProps<{
        fill?:string,       // Fill of bubble (color or image url)
        x?:number,          // X Position of bubble
        y?:number,          // Y Position of bubble
        z?:number,          // Size of bubble (pixels)
        f?:number,          // Friction of bubble (0-1)
        r?:number,          // Randomness of bubble (pixels)
        m?:number,          // Maxium Velocity (pixels)
        back?:boolean,      // Background Bubble (does not fights for parent's "area")
    }>(), {
        fill: 'red',
        x: 0,
        y: 0,
        z: 200,
        f: 0.25,
        r: 1,
        m: 300,
        back: false,
    });
    let scroll = ref({
        oY: 0,
        oX: 0,
        vX: 0,
        vY: 0,
        pX: 0,
        pY: 0,
        aX: 0,
        aY: 0,
        dT: Number(new Date()),
    });
    let drag = ref<number[]>([]);
    let mouse:globalThis.Ref<number[]>|undefined = inject('mouse');
    let area:globalThis.Ref<number[]>|undefined = inject('area');
    let focus = ref({
        n: 0,
        x: 0,
        y: 0,
    })

    function animate() {
        let dT = Number(new Date());
        let dt = (dT - scroll.value.dT)/1000;
        scroll.value.dT = dT;
        if (bubble.value && dt < 1) {
            // Bubble is focused
            if (!info.back && area && area.value[1] > 1) {
                focus.value.x = Math.cos(focus.value.n*2*Math.PI/area.value[1]+area.value[0])*5;
                focus.value.y = Math.sin(focus.value.n*2*Math.PI/area.value[1]+area.value[0])*5;
            }
            // User is dragging Bubble
            if (drag.value.length && mouse && mouse.value[2] == -1) {
                scroll.value.pX += mouse.value[0]-drag.value[0];
                scroll.value.pY += mouse.value[1]-drag.value[1];
                drag.value = [];
                bubble.value?.classList.remove('focus');
            // Animate Bubble Momentum
            } else if (!drag.value.length) {
                let dY = (window.scrollY-scroll.value.oY)-scroll.value.aY;
                let dX = (window.scrollX-scroll.value.oX)-scroll.value.aX;
                scroll.value.aY += dY;
                scroll.value.aX += dX;
                scroll.value.pY += scroll.value.vY*dt;
                scroll.value.pX += scroll.value.vX*dt;
                scroll.value.vY = Math.max(Math.min((scroll.value.vY-scroll.value.pY+dY*info.f+info.r*(0.5-Math.random()))*(1-info.f*dt),info.m),-info.m);
                scroll.value.vX = Math.max(Math.min((scroll.value.vX-scroll.value.pX+dX*info.f+info.r*(0.5-Math.random()))*(1-info.f*dt),info.m),-info.m);
            }
            // Apply Bubble position
            bubble.value.style.transform = `translate(calc(-50% + ${
                drag.value.length && mouse && mouse.value[2] != -1 ? scroll.value.pX+mouse.value[0]-drag.value[0] : scroll.value.pX
            }px + ${focus.value.x+info.x}vw), calc(-50% + ${
                drag.value.length && mouse && mouse.value[3] != -1 ? scroll.value.pY+mouse.value[1]-drag.value[1] : scroll.value.pY
            }px + ${focus.value.y+info.y}vw))`;
        }
        requestAnimationFrame(animate);
    }
    onMounted(() => {
        if (!bubble.value) return;
        if (['red','yellow','green','blue'].includes(info.fill)) bubble.value.classList.add(info.fill);
        else {
            bubble.value.style.backgroundImage = `url(${info.fill})`;
        }
        bubble.value.style.width = `${info.z}px`;
        bubble.value.style.height = `${info.z}px`;
        scroll.value.oY = bubble.value.getBoundingClientRect().top;
        scroll.value.aY = window.scrollY-scroll.value.oY;
        scroll.value.oX = bubble.value.getBoundingClientRect().left;
        scroll.value.aX = window.scrollX-scroll.value.oX;
        if (!info.back && area) {
            focus.value.n = area.value[1];
            area.value[1]++;
        }
        bubble.value.addEventListener('mousedown', e => {
            drag.value = [e.clientX, e.clientY];
            bubble.value?.classList.add('focus');
        });
        animate();
    });
</script>
<style lang="sass">
    .bubble
        position: absolute
        display: inline-block
        border-radius: 50%
        transform: translate(-50%, -50%)
        box-shadow: 0 0 5px #12181ADD
        background-size: cover
        background-position: center
        &.red
            background-color: #EA4335
        &.yellow
            background-color: #FBBC04
        &.green
            background-color: #34A853
        &.blue
            background-color: #4285F4
        &.focus
            z-index: 1
</style>
<template>
    <div class="bubble" ref="bubble">
    </div>
</template>