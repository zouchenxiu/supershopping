import Vue from 'vue'
import Router from 'vue-router'
// 使用懒加载的方式导入
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Category = () => import('../views/category/Category')


// 安装插件
Vue.use(Router)
// 创建路由对象
const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/home',
    component:Home
  }
]
const router = new Router({
  routes,
  mode:'history'
})



// 导出router
export default router
