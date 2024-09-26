<script setup lang="ts">
    const info = withDefaults(defineProps<{
        amount?:number,
        span?:number,
        img?:string,
    }>(), {
        amount: 10,
        span: 30,
        img: '',
    });
    let imgs = info.img.split(',').map(x=>x.trim()).filter(x=>x.length);
    let show = ref<number>(0);
    let observer:IntersectionObserver|null = null;
    let dom = ref<HTMLDivElement|null>(null);
    function letout() {
        show.value = 1-(1-show.value)*0.9;
        if (show.value > 0.99) show.value = 1;
        else setTimeout(letout, 10);
    }
    onMounted(() => {
        if (!dom.value) return;
        observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                letout();
                observer?.disconnect();
            }
        }), {
            root: null,
            rootMargin: '0px',
            threshold: 1
        });
        observer.observe(dom.value);
    });
    // Random Generation
    let bubbles = Array(info.amount).fill({}).map(x=>({
        color: ['red','yellow','green','blue'][Math.floor(Math.random()*4)] as 'red'|'yellow'|'green'|'blue',
        x: Array(2).fill(0).map(x=>Math.random()).reduce((a,b)=>a+b)/2*info.span-info.span/2,
        y: Array(2).fill(0).map(x=>Math.random()).reduce((a,b)=>a+b)/2*info.span-info.span/2,
        z: Math.round(Math.random()*15)+5,
    }));
    let angle = ref<number>(Math.random()*2*Math.PI);
</script>
<template>
    <div ref="dom" class="relative w-full h-full pointer-events-none">
        <Bubble v-for="(n,i) in amount" 
            :fill="bubbles[i].color"
            :x="bubbles[i].x*show"
            :y="bubbles[i].y*show"
            :z="bubbles[i].z*show"
            :lag="n/amount/20"
            inline left="50%" top="50%" />
        <Bubble v-for="(n,i) in imgs"
            :fill="n"
            :x="(imgs.length-1 ? show*span/4 : 0)*Math.cos(angle+2*Math.PI*i/imgs.length)"
            :y="(imgs.length-1 ? show*span/4 : 0)*Math.sin(angle+2*Math.PI*i/imgs.length)"
            :z="show*20"
            :lag="0.1"
            inline left="50%" top="50%" />
    </div>
</template>