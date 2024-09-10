<script setup>

import mapels from '../data/soal.json'


</script>


<template>
    <main>
        <div class="card" v-for="mapel in mapels" :key="mapel.id">
            <img :src="mapel.img" :alt="mapel.name">
            <h2>{{ mapel.name }}</h2>
            <p>{{ mapel.soal.length }}</p>
        </div>
    </main>
</template>


<style scoped>
    .main {
        width: 100%;
        padding: 1rem;
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
    }
</style>