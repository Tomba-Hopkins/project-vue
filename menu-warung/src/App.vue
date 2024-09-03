<script>
</script>

<template>
  <main>
    <header>
      <h2>Our Resto</h2>
      <input type="search" placeholder="Search...">
    </header>

    <section class="menu">
      <div class="card">
        <div class="card-body">
          <img src="" alt="">
          <p>Items</p>
        </div>
      </div>
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
}

main .menu .card {
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
  
}

main .menu .card:hover {
  box-shadow: 0.8rem 0.1rem 4rem;
}

</style>