/*
 * @Author: FRADY-9020M\frady wujixmm@gmail.com
 * @Date: 2024-05-27 18:58:36
 * @LastEditors: FRADY-9020M\frady wujixmm@gmail.com
 * @LastEditTime: 2024-05-27 23:23:35
 * @FilePath: \vitep1\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";
import routes from "~pages"

const router = createRouter({
    // routes: [
    //     {   
    //         path: '/index',
    //         name: "首页",
    //         component: () => import("../pages/index.vue"),
    //         meta: {

    //         }
    //     },
    //     {   
    //         path: '/about',
    //         name: "关于",
    //         component: () => import("../pages/about.vue"),
    //         meta: {

    //         }
    //     }
    // ],
    routes,
    history: createWebHistory()
})

export default router