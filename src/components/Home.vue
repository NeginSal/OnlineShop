<template>
  <div class="container">
    <div class="row py-3">
      <div class="col" id="main">
        <Cards @update-cart="updateCart($event)" />
        <!-- <div class="row row-cols-3 mt-5">
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
        </div> -->
      </div>
      <div class="col-3 order-2" id="sticky-sidebar">
        <div class="sticky-top">
          <SideBar :cart="cart" :cartTotal="cartTotal" />
          <!-- <SideBar /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "./Cards.vue";
import SideBar from "./SideBar.vue";

export default {
  data() {
    return {
      displayCart: false,
      cart: [],
    };
  },
  components: {
    SideBar,
    Cards,
  },
  computed: {
    cartTotal() {
      return this.cart.reduce((inc, product) => Number(product.price) + inc, 0);
    },
  },
  methods: {
    updateCart(product) {
      this.cart.push(product);
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