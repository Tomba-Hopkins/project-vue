<script setup>

import { useRoute } from 'vue-router';
import menus from '../data/menu.json'

const route = useRoute()

const data = menus[0].items.find((item) => item.id == parseInt(route.params.id))

</script>

<template>
    <main>
        <h1>{{ data.id }}</h1>
        <h2>{{ data.name }}</h2>
        <img :src="data.img" :alt="data.name">
        <p>Price: {{ data.price }}</p>
    </main>
</template>

<style scoped>

main {
    text-align: center;
}

h1 {
    margin-top: 7rem;
}

</style>