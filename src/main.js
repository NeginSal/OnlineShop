import { createApp } from "vue";
import store from "./store/store";
import App from "./App.vue";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router'

const app = createApp(App);

app.use(router)
app.use(store);

app.mount("#app");
