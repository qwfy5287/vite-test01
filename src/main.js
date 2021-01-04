import { createApp } from "vue";
// import App from './App.vue'

// createApp(App).mount('#app')

import Antd from "ant-design-vue";
import App from "./App";
import "ant-design-vue/dist/antd.css";

const app = createApp();
app.config.productionTip = false;

app.use(Antd);
