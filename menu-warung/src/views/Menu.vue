<script setup>

import { useRoute, RouterView, useRouter } from 'vue-router';
import menus from '../data/menu.json'
import { computed } from 'vue';

const route = useRoute()
const router = useRouter()

const type = route.params.type
const dataID = parseInt(route.params.id)


const data = computed(() => {

    const tipe = menus.find((menu) => menu.title.toLowerCase() === type.toLowerCase())

    if (tipe) {
        return tipe.items.find((item) => item.id === dataID)
    } else {
        return null
    }
    
})


const showBonus = () => {
    router.push({
        name: "bonus",
        params: {
            id: dataID
        }
    })
}

</script>

<template>
    <main>
        <div v-if="data">
            <h1>{{ data.id }}</h1>
            <h2>{{ data.name }}</h2>
            <img :src="data.img" :alt="data.name">
            <p>Price: {{ data.price }}</p>
            <button @click="showBonus()">Bonus</button>
            <RouterView/>
        </div>
        <h1 v-else>Not found</h1>
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