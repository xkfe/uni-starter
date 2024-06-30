import { defineMiddleware } from '@uni-helper/vite-plugin-uni-middleware/runtime'

export default defineMiddleware((to, from) => {
  // const store = useStore();
  // if (!store.isLogin) {
  //   return "/pages/login/index";
  // }
  console.log('UniMiddleware=> to,from :>> ', to, from)
})
