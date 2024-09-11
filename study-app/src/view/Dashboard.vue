
<script setup>

import Card from '@/components/Card.vue';

</script>

<template>
    <main>
        <header>
            <h1>Welcome</h1>
            <input type="search" autofocus>
        </header>
        <Card/>
    </main>
</template>


<style scoped>

main {
    max-width: 90vw;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    flex-direction: column;
}

header {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

</style>