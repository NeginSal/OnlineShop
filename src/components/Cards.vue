<template>
  <div>
    <div class="col" id="main">
      <h1>Products List</h1>
      <div class="row row-cols-3 mt-5">
        <div v-for="product in products" :key="product.id" class="card col">
          <div class="card-body">
            <h5 class="card-title text-center">{{ product.name }}</h5>
            <p class="card-text text-center">{{ product.price }}$</p>
          </div>
          <div class="text-center mb-3">
            <button @click="addToCart(product)" type="button" class="btn">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },

};
</script>

<style scoped>
.card {
  border: 2px solid #009900;
  background-color: #d9ffb3;
  color: #003300;
}
.btn {
  background-color: #66ff99;
}

</style>