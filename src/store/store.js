// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)
// export const store = new Vuex.Store({
//   state: {
//     products: [
//       { name: "Banana Skin", price: 20 },
//       { name: "Shiny Star", price: 40 },
//       { name: "Green Shells", price: 60 },
//       { name: "Red Shells", price: 80 },
//     ],
//   },
// });
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },



});
export default store;
