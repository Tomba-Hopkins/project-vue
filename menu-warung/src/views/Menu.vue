<script setup>

import { useRoute } from 'vue-router';
import menus from '../data/menu.json'
import { computed } from 'vue';

const route = useRoute()

const type = route.params.type
console.log(route)
const data = computed(() => {

    console.log(type)
    const tipe = menus.find((menu) => menu.title.toLowerCase() === type.toLowerCase())

    if (tipe) {
        return tipe.items.find((item) => item.id === parseInt(route.params.id))
    } else {
        return null
    }
    
})

</script>

<template>
    <main>
        <div v-if="data">
            <h1>{{ data.id }}</h1>
            <h2>{{ data.name }}</h2>
            <img :src="data.img" :alt="data.name">
            <p>Price: {{ data.price }}</p>
        </div>
        <p v-else>Not found</p>
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