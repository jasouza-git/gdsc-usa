<script setup lang="ts">

const handleFormSubmit = (values: any) => {
    console.log('Form Submitted:', values)
}
</script>

<template>
    <v-container>
        <div style="height: 100px; width: 100%;"></div>
        <v-row>
            <Form @submit="handleFormSubmit" class="mx-auto"></Form>
        </v-row>
        <div style="height: 70px; width: 100%;"></div>
    </v-container>
</template>