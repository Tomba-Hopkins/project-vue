<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
    <nav>
        <RouterLink to="/" active-class="aktif">Home</RouterLink>
        <RouterLink to="/about" active-class="aktif">About</RouterLink>
        <RouterLink to="/contact" active-class="aktif">Contact</RouterLink>
    </nav>
</template>


<style scoped>

nav {
    width: 100%;
    height: 3rem;
    background-color: blue/30;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: start;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: start;
    padding: 1rem;

}

nav > * {
    color: skyblue;
    margin: 0 1rem;
    text-decoration: none;
}

.aktif {
    font-weight: bold;
    color: violet;
}

</style>