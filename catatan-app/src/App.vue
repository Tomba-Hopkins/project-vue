<script setup>
import { ref } from 'vue';

let modal = ref(false)
let catatanNew = ref("")
let kotakCatatan = ref([])
let errorMsg = ref("")

let d = 0

const addNotes = () => {

  if(!catatanNew.value){
    errorMsg.value = "Kosong noh"
    return
  }

  errorMsg.value = ""

  kotakCatatan.value.push({
    id: d,
    // title: 
    content: catatanNew.value,
    date: new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  })
  d++
  catatanNew.value = ""
  modal.value = false

}

const deleteNotes = (id) => {
  kotakCatatan.value = kotakCatatan.value.filter((note) => note.id !== id)
}

</script>


<template>
  <div class="p-2">
    <h1 class="bg-gradient-to-bl from-sky-400 to-slate-600 p-2 text-5xl text-center text-transparent bg-clip-text font-semibold shadow-xl mt-3">The Notes Memories</h1>
    <p class="text-center bg-gradient-to-r from-sky-700 to-slate-200 bg-clip-text text-transparent">Help you for remember any words idea or anything else, so enjoy it <span class="text-white">🦖</span></p>
    <main class="h-auto">
      <h2 class="text-4xl text-center font-bold bg-gradient-to-r from-slate-700 to-slate-100 bg-clip-text text-transparent mt-6">List of memo</h2>
      <hr class="border-1 mt-6 border-sky-600">
      <button @click="modal = true" class="p-2 w-1/12 my-14 bg-sky-300 text-slate-600 font-semibold font-mono rounded-md hover:bg-sky-600 hover:text-slate-100 transition duration-150 active:bg-sky-800 active:text-slate-100">+</button>




      <section class="container w-1/2 h-72 bg-slate-700 p-5 mb-5 rounded-md overflow-x-scroll">
        <div class="flex flex-nowrap gap-4 items-center h-full">
            <div v-for="(note, index) in kotakCatatan" :key="index" class="flex flex-col justify-between h-full w-48 p-2 text-center bg-slate-200 text-slate-700 rounded-md font-mono">
              <p>{{ note.id }}</p>
              <p>{{ note.content }}</p>
              <div class="flex flex-row justify-center items-center mt-2">
                <p class="text-xs mx-3">{{ note.date }}</p>
                <button @click="deleteNotes(note.id)" class="h-7 w-14 text-xs bg-slate-400 text-slate-300">Delete</button>
              </div>
            </div>
        </div>
      </section>
    </main>


    <div v-if="modal" class="modal-box top-0 left-0 absolute w-full h-full bg-white/30 flex items-center justify-center backdrop-blur-sm flex-col">
        <button class="w-8 h-8 bg-slate-700 rounded-md ml-64" @click="modal = false">&times;</button>
        <textarea v-model="catatanNew" name="notes" id="notes" cols="30" rows="10" class="text-slate-700"></textarea>
        <button class="bg-slate-700 px-3 py-1" @click="addNotes">Add</button>
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
