import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap-icons/font/bootstrap-icons.css";

import { createApp } from 'vue';
import App from './App.vue';
import {createPinia} from 'pinia'
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
createApp(App).use(createPinia()).use(router).mount("#app");
