<script setup lang="ts">
    let info = withDefaults(defineProps<{
        no?:number,
        head:string,
        landing?:boolean,
        body?:string,
    }>(), {
        no:-1,
        landing:false,
        body:'',
    });
    let num = ref<number>(info.no);
    let paragraphs:globalThis.Ref<number>|undefined = inject('paragraphs');
    onMounted(() => {
        if (paragraphs == undefined) return;
        paragraphs.value++;
        num.value = paragraphs.value;
    });
</script>
<template>
    <div :class="'flex flex-col items-center justify-center p-2.5 '+(landing ? 'text-center' : 'text-left')">
        <!--- Paragraph Num --->
        <p :class="landing ? '' : 'font-bold'">
            <span v-if="num > 0">{{ String(num).padStart(2,'0')+' - ' }}</span>
            <span>{{ head }}</span>
        </p>
        <!--- Landing -->
        <p v-if="landing" class="text-4xl">Google Developers Student Club</p>
        <!--- Body -->
        <p v-if="body.length" class="pt-2">
            {{ body }}
        </p>
    </div>
</template>