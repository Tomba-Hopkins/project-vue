<script setup>
    const { card } = defineProps(["card"])
    console.log(card)
</script>

<template>
    <div class="card">
        <img :src="card.img" :alt="card.title">
        <h2>{{ card.title }}</h2>
        <p>{{ card.items.length }} items</p>
      </div>
</template>



<style scoped>

.card {
  width: 12rem;
  height: 14rem;
  background-color: whitesmoke;
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

.card h2 {
    font-size: 70%;
}


 .card img {
  width: 100%;
  height: 80%;
  border-radius: 1rem 1rem 0 0;
  border: 1px solid rgb(50, 41, 41);
}

.card p {
    font-size: 50%;
}
</style>