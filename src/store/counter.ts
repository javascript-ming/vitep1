/*
 * @Author: FRADY-9020M\frady wujixmm@gmail.com
 * @Date: 2024-05-27 20:50:24
 * @LastEditors: FRADY-9020M\frady wujixmm@gmail.com
 * @LastEditTime: 2024-05-27 21:22:29
 * @FilePath: \vitep1\src\store\counter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import {defineStore} from 'pinia'

export const useCounterStore = defineStore("counter", {
    state() {
        return {
             num: 1
        }
    },
    actions: {
        increment() {
            this.num++
        }
    }
})

