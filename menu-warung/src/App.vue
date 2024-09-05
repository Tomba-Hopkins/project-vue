<script setup>

import { ref, watch } from 'vue';

import menus from './data/menu.json'
import CardType from './components/CardType.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <main>
    <RouterView/>
  </main>
</template>
