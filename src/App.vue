<template>
  <div id="app">
    <Navbar />
    <Home />



  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Home,
    // Report,
  },
};
</script>

<style scoped>
#app {
  background-color: #ffffe6;
}
</style>
