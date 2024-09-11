<script setup>

import mapels from '../data/soal.json'
import gsap from 'gsap';


const bEnter = (el) => {
    el.style.opacity = '0'
    el.style.transform = 'translateX(-5rem)'
}
const enter = (el) => {
    gsap.to(el, {
        x: '0',
        opacity: '1',
        duration: 0.3,
        delay: el.dataset.dek * 0.3
    })
}


</script>


<template>
    <section>
        <TransitionGroup appear @before-enter="bEnter" @enter="enter">
            <div class="card" v-for="(mapel, index) in mapels" :key="mapel.id" :data-dek="index">
                <img :src="mapel.img" :alt="mapel.name">
                <div class="content">
                    <h2>{{ mapel.name }}</h2>
                    <p>{{ mapel.soal.length }} Soal</p>
                </div>
            </div>
        </TransitionGroup>
    </section>
</template>


<style scoped>
    section {
        width: 100%;
        padding: 1rem;
        margin-top: 5rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    }

    .card {
        width: 12rem;
        height: 14rem;
        background-color: #ccc;
        border-radius: 1rem;
        color: black;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        transition: all 0.4s ease;
        cursor: pointer;
    }

    .card:hover {
        width: 14rem;
    }

    .card img {
        width: 100%;
        height: 50%;
        border-radius: 1rem 1rem 0 0;
        padding: -5rem;
        filter: grayscale(0);
        transition: all 0.4s ease;
    }

    .card .content {
        width: 100%;
        height: 50%;
        padding: 1rem;
    }

    .card img:hover {
        filter: grayscale(1);
    }
</style>