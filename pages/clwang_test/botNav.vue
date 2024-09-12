<script setup lang="ts">
const titles = ['title 1', 'title 2', 'title 3']
const links = [[
        {title: 'item 1', link:'http://google.com'}, 
        {title: 'item 2', link: 'https://www.youtube.com'}, 
    ],[
        {title: 'item 1', link:'http://google.com'}, 
        {title: 'item 2', link: 'https://www.youtube.com'}, 
        {title: 'item 3', link: 'https://translate.google.com'}
    ],[
        {title: 'item 1', link:'http://google.com'}, 
        {title: 'item 2', link: 'https://www.youtube.com'}, 
        {title: 'item 3', link: 'https://translate.google.com'}
    ]]
</script>

<template>
    <div style="height: 100px; width: 100%;"></div>
    <BotNav :titles="titles" :links="links"></BotNav>
    <div style="height: 100px; width: 100%;"></div>
</template>