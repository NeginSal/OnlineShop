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
    StoreCart: [],
  },
  getters: {
    products: (state) => state.products,
    StoreCart: (state) => state.products,
  },
  mutations: {
    AddProduct(state, id) {
      state.StoreCart.push(id)
    },
    DeleteProduct(state, index) {
      state.StoreCart.splice(index, 1)
    }

  },
  actions: {

  }




});
export default store;
