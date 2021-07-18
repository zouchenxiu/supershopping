import Vue from 'vue'
import Router from 'vue-router'
// 使用懒加载的方式导入
const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Category = () => import('../views/category/category')
const Detail = () => import('../views/detail/Detail')


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
  },
  {
    // 在后面拼接上id为动态路由
    path:'/detail:iid',
    component:Detail
  }
]
const router = new Router({
  routes,
  mode:'history'
})



// 导出router
export default router
