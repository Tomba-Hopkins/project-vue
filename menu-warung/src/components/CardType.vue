<script setup>
    const { card } = defineProps(["card"])
    console.log(card)

    import { RouterLink } from 'vue-router';

    // const pindah = () => `/${card.title}`
</script>

<template>
    <div class="card">
        <img :src="card.img" :alt="card.title">
        <h2>{{ card.title }}</h2>
        <p>{{ card.items.length }} items</p>
        <RouterLink class="liat" :to="`/${card.title}`">See</RouterLink>
    </div>
</template>



<style scoped>

.card {
  width: 16rem;
  height: 20rem;
  background-color: whitesmoke;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.4s ease-in;
  border: 1px solid rgb(43, 36, 36);
  margin: 1rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: rgb(172, 224, 245);
  
}

 .card:hover {
  box-shadow: 0.8rem 0.1rem 4rem;
}


 .card img {
  width: 100%;
  height: 60%;
  border-radius: 0.5rem 0.5rem 0 0;
  border: 1px solid rgb(50, 41, 41);
}

.card h2 {
    background-image: linear-gradient(to right, rgb(27, 22, 22), rgb(186, 169, 169));
    background-clip: text;
    color: transparent;
    margin: 0.4rem 0;
}

.card p {
    font-weight: bold;
}

.card .liat {
  display: inline-block;
  width: 50%;
  padding: 0.3rem;
  transition: 0.4s linear;
  border-radius: 0.2rem;
  border: none;
  text-decoration: none;
  background-color: aliceblue;
  text-align: center;
  color: black;
}
.card .liat:hover {
  background-color: gray;
  color: white;
}
</style>