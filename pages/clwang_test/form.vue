<script setup lang="ts">

const handleFormSubmit = (values: any) => {
    console.log('Form Submitted:', values)
}
</script>

<template>
    <Form @submit="handleFormSubmit" class="mx-auto"></Form>
</template>