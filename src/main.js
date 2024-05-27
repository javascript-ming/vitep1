/*
 * @Author: FRADY-9020M\frady wujixmm@gmail.com
 * @Date: 2024-05-27 17:14:09
 * @LastEditors: FRADY-9020M\frady wujixmm@gmail.com
 * @LastEditTime: 2024-05-27 23:27:21
 * @FilePath: \vitep1\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import App from './App.vue'
import router from './modules/router'
import pinia from "./modules/pinia";
import "./router"

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')