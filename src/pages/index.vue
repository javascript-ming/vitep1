<!--
 * @Author: FRADY-9020M\frady wujixmm@gmail.com
 * @Date: 2024-05-27 19:00:05
 * @LastEditors: FRADY-9020M\frady wujixmm@gmail.com
 * @LastEditTime: 2024-05-27 23:22:07
 * @FilePath: \vitep1\src\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <testCom></testCom>
    <testCom2 />    
    <div>
        HOME {{ counter.num }}
    </div>
    <p></p>
    <button @click="counter.increment()">递增</button>
    <div class="section"></div> 
    <el-button>尝试unplugin-vue自动引入elementplus</el-button>
    <div class="section"></div> 
    <el-button @click.stop="inc()">{{count}}</el-button>
</template>

<script setup>
import testCom from "../components/testCom.vue";
import { useCounterStore } from "../store/counter";
import {useRoute} from 'vue-router'

console.log(toRaw(useRoute()))
const counter = useCounterStore();
console.log(counter)

const count = ref(100)
const inc = () => {
    count.value ++
}
</script>
<route>
    {
        meta: {
            age: 12
        }
    }
</route>
<style lang="scss">
    .section{
        margin: 10px 0 0;
    }
    
</style>