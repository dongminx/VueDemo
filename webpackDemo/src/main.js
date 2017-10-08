//导入文件
import Vue from 'vue';
import App from './app.vue';

//导入mint-ui框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入MUI css文件
import './statics/css/mui.min.css'


import  './root.css'
//添加路由
//导入
import VueRouter from 'vue-router'
//使用
Vue.use(VueRouter)

//添加vue-resource框架
import VueResource from 'vue-resource'
Vue.use(VueResource)

//添加moment框架
import moment from 'moment'
//定义一个全局的过滤器，过滤时间
Vue.filter('filter',function (input,fmtString) {
    return moment(input).format(fmtString);
})
//移动端图片预览插件
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

//引入自定义组件
import Home from './components/Home/Home.vue'
import Member from './components/Member.vue'
import Search from './components/Search.vue'
import Shopcar from './components/Shopcar.vue'
import Newslist from './components/Home/Newslist.vue'
import Newsinfo from './components/Home/Newsinfo.vue'
import Imagelist from './components/Home/Imagelist.vue'
import PhotoInfo from './components/Home/photoinfo.vue'
import GoodsList from './components/Home/Goodslist.vue'
import Goodsinfo from './components/Home/Goodsinfo.vue'
import Goodsdesc from './components/Home/Goodsdecs.vue'
import Comments from './components/Home/Comments.vue'
//路由的实例化
var router=new VueRouter({
    linkActiveClass:'mui-active',
    routes:[
        {name:'root',path:'/',redirect:'/home'},
        {name:'home',path:'/home',component:Home},
        {name:'member',path:'/member',component:Member},
        {name:'search',path:'/search',component:Search},
        {name:'shopcar',path:'/shopcar',component:Shopcar},
        {name:'newslist',path:'/newslist',component:Newslist},
        {name:'newsinfo',path:'/newsinfo/:id',component:Newsinfo},
        {name:'imagelist',path:'/imagelist',component:Imagelist},
        {name:'photoinfo',path:'/photoinfo/:id',component:PhotoInfo},
        {name:'goodslist',path:'/goodslist',component:GoodsList},
        {name:'goodsinfo',path:'/goodsinfo/:id',component:Goodsinfo},
        {name:'goodsdesc',path:'/goodsdesc',component:Goodsdesc},
        {name:'comments',path:'/comments',component:Comments}
    ]
})

//实例化vue对象
new Vue({
    el:"#app",
    router:router,
    // render:function(create){
    //     create(App)
    // }
    //渲染方法 用于渲染App组件
    render:create=>create(App),
})