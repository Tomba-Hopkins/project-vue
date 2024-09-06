<script setup>

import { computed } from 'vue';
import menus from '../data/menu.json'
import { useRoute } from 'vue-router';

const route = useRoute()
const data = computed(() => {
    const tipe = menus.find((menu) => menu.title.toLowerCase() === route.params.type.toLowerCase())

    if(!tipe) {
        return null
    } 

    const item = tipe.items.find((i) => i.id === parseInt(route.params.id))
    console.log(item)

    return item || null
    
})



const bonus = data.value.bonus
console.log(bonus)

</script>

<template>
    <main>
        <h2>Bonus</h2>
        <p>Topping: {{ bonus.topping }}</p>
        <p>Desc: {{ bonus.motto }}</p>
    </main>
</template>