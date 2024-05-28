/*
 * @Author: FRADY-9020M\frady wujixmm@gmail.com
 * @Date: 2024-05-28 11:24:38
 * @LastEditors: FRADY-9020M\frady wujixmm@gmail.com
 * @LastEditTime: 2024-05-28 11:25:42
 * @FilePath: \vitep1\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from '../modules/router'

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    console.log(to, from, next)
    next()
})