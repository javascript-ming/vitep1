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