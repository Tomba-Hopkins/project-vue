<script setup>

import menus from '../data/menu.json'
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute()
const ada = menus.find((menu) => menu.title.toLowerCase() == route.params.type.toLowerCase())

</script>

<template>
    <main>
        <h1 class="title">{{ ada?.title }}</h1>
        <div class="container">
            <div class="card" v-for="item in ada?.items" :key="item.id">
                <img :src="item.img" alt="">
                <h2>{{ item.name }}</h2>
                <p>{{ item.price }}</p>
                <RouterLink :to="`/menu/${item.id}`">See</RouterLink>
            </div>
        </div>
    </main>
</template>


<style scoped>

main {
    display: flex;
    padding: 1rem;
    flex-direction: column;
}

.title {
    width: 6rem;
    margin: 6rem auto;
    background-image: linear-gradient(to right,red, blue);
    background-clip: text;
    color: transparent;
    text-align: center;
}

.container {
    width: 90%;
    display: flex;
    padding: 1rem;
    margin: auto;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.card {
    width: 12rem;
    height: 18rem;
    background-color: gainsboro;
    padding: 0.2rem;
    border-radius: 1rem;
    overflow: hidden;
}

.card img {
    width: 100%;
    height: 50%;
    border-radius: 1rem 1rem 0 0;
}


</style>