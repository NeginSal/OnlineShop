<template>
  <div class="container">
    <div class="row py-3">
      <div class="col" id="main">
        <Cards @update-cart="updateCart($event)" />
      </div>
      <div class="col-3 order-2" id="sticky-sidebar">
        <div class="sticky-top">
          <SideBar :cart="cart" :cartTotal="cartTotal" />
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