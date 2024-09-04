<script setup>
    const { card } = defineProps(["card"])
    console.log(card)
</script>

<template>
    <div class="card">
          <img :src="card.img" :alt="card.title">
          <p>{{ card.title }}: <span>{{ card.items.length }}biji</span></p>
      </div>
</template>



<style scoped>

.card {
  width: 10rem;
  height: 12rem;
  background-color: whitesmoke;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-in;
  border: 1px solid rgb(43, 36, 36);
  margin: 1rem;
  
}

 .card:hover {
  box-shadow: 0.8rem 0.1rem 4rem;
}


 .card img {
  width: 6rem;
  height: 6rem;
  border-radius: 1rem;
  border: 1px solid rgb(50, 41, 41);
}
</style>