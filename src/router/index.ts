import router from '../modules/router'

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    console.log(to, from, next)
})