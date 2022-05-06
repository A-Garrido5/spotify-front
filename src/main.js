import { createApp } from 'vue'
import App from './App.vue'
import './assets/style.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



const app = createApp(App)

app.use(VueSweetalert2);

app.mount('#app');
