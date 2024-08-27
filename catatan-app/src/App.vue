<script setup>
import { ref } from 'vue';

let modal = ref(false)

</script>


<template>
  <div class="p-2">
    <h1 class="bg-gradient-to-bl from-sky-400 to-slate-600 p-2 text-5xl text-center text-transparent bg-clip-text font-semibold shadow-xl mt-3">The Notes Memories</h1>
    <p class="text-center bg-gradient-to-r from-sky-700 to-slate-200 bg-clip-text text-transparent">Help you for remember any words idea or anything else, so enjoy it <span class="text-white">🦖</span></p>
    <main class="h-auto">
      <h2 class="text-4xl text-center font-bold bg-gradient-to-r from-slate-700 to-slate-100 bg-clip-text text-transparent mt-6">List of memo</h2>
      <hr class="border-1 mt-6 border-sky-600">
      <button @click="modal = true" class="p-2 w-1/12 my-14 bg-sky-300 text-slate-600 font-semibold font-mono rounded-md hover:bg-sky-600 hover:text-slate-100 transition duration-150 active:bg-sky-800 active:text-slate-100">+</button>
      <section class="container w-full h-52 bg-slate-400 p-5 rounded-md overflow-x-scroll">
        <div class="w-max h-full flex items-center gap-4 ">
          <!-- <div class="card p-5 w-52 h-full bg-slate-700 text-slate-300">
            sebus
          </div> -->
        </div>
      </section>
    </main>
    <div v-if="modal" class="modal-box top-0 left-0 absolute w-full h-full bg-white/30 flex items-center justify-center backdrop-blur-sm flex-col">
        <button class="w-8 h-8 bg-slate-700 rounded-md ml-64" @click="modal = false">&times;</button>
        <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
        <button>Add</button>
    </div>
  </div>
</template>

<style>

.container {
  scrollbar-color: transparent transparent;
  width: 100%;
}

.container::-webkit-scrollbar{
  display: none;
}

</style>
