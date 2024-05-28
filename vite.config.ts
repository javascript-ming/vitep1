/*
 * @Author: FRADY-9020M\frady wujixmm@gmail.com
 * @Date: 2024-05-28 11:24:33
 * @LastEditors: FRADY-9020M\frady wujixmm@gmail.com
 * @LastEditTime: 2024-05-28 11:29:04
 * @FilePath: \vitep1\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
    plugins: [
        Vue(),
        Pages(),
        AutoImport({
            imports:[ 'vue', 'vue-router', 'pinia']
        }),
        Components({
        resolvers: [ElementPlusResolver()]
    }
    )]
})