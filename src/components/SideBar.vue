<template>
  <div class="side text-center">

      <!-- <p>{{cart}}</p> -->
      <!-- <p>Selected Items</p>
      <p>{{ cart.length }}</p> -->

    <!-- <div>
      <p>Total Price</p>
      <p>${{ cartTotal }}</p>
    </div> -->
    <router-link to="/report">createReport</router-link>
  </div>
</template>

<script>

export default {
  props: ["cart", "cartTotal"],
};
</script>

<style scoped>
</style>