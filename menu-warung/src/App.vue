<script setup>

import { ref, watch } from 'vue';

import menus from './data/menu.json'
import CardType from './components/CardType.vue';

const menusValue = ref(menus)
const search = ref("")

watch(search, () => {
  menusValue.value = menus.filter((menu) => {
    return menu.title.toLowerCase().includes(search.value.toLowerCase())
  })
})

</script>

<template>
  <main>
    <header>
      <h2>Our Resto</h2>
      <input v-model="search" type="search" placeholder="Search...">
    </header>

    <section class="menu">
      <CardType v-for="menu in menusValue" :key="menu.id" :card="menu"/>
    </section>
  </main>
</template>


<style scoped>


main {
  width: 90vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  flex-direction: column;
}

main header {
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}

main header h2 {
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 0.4rem;
  background-image: linear-gradient(to right, red, blue);
  color: transparent;
  background-clip: text;
  font-size: xx-large;
}


main .menu {
  width: 90vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  gap: 3rem;
}
</style>