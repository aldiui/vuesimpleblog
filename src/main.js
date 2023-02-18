import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Local Css
import "./assets/main.css";

// Bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);

app.use(VueAxios, axios)
app.use(router);

app.mount("#app");
