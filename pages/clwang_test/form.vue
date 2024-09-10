<script setup lang="ts">

const handleFormSubmit = (values: any) => {
    console.log('Form Submitted:', values)
}
</script>

<template>
    <v-container>
        <v-row>
            <Form @submit="handleFormSubmit" class="mx-auto"></Form>
        </v-row>
    </v-container>
</template>