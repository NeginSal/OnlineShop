<template>
  <div class="main-side">
    <div class="side">
      <div>
        <h6>Selected Items</h6>
        <p>{{ cart.length }} items</p>
        <h6>Total Price</h6>
        <p>${{ cartTotal }}</p>
      </div>
      <!-- <router-link to="/report"  tag="button">createReport</router-link> -->
      <button type="button" class="btn" @click="$router.push('/report')">CreateReport</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cart", "cartTotal"],
};
</script>

<style scoped>
.side {
  text-align: center;
  margin-top: 50%;
  padding: 25px;
}
.main-side {
  height: 100%;
  background-color: #cce6ff;
  border-radius: 30px;
  color: #003333;
}
.btn {
  background-color: #3399ff;
  border-radius: 10px;
}
</style>