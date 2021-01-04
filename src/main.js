import { createApp } from "vue";
import App from "./App.vue";

// createApp(App).mount('#app')

import ElementPlus from "element-plus";
// // import "element-plus/lib/theme-chalk/index.css";
// import App from "./App.vue";

// // import { index } from "element-plus/lib/theme-chalk";

const app = createApp(App);
app.use(ElementPlus);
app.mount("#app");
