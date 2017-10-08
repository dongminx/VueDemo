<template>
    <div>
        <!-- 导航条 -->
        <!--从mint-ui导入的内容-->
        <mt-header fixed title="VueDemo">
            <div slot="left">
                <mt-button  icon="back" @click="goBack" v-show="isshow">返回</mt-button>
            </div>
        </mt-header>
        <!--<mt-header fixed title="vue项目">-->
            <!--<mt-button v-link="'/'" icon="back">返回</mt-button>-->
        <!--</mt-header>-->
        <!-- 切换各个组件的位置 -->
        <router-view></router-view>
        <!-- tabs内容 -->
        <!--mui导入的内容-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="shopcar">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物</span>
            </router-link>
            <router-link class="mui-tab-item" to="search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<style scoped>

</style>

<script type="text/ecmascript-6">
    export default{
        data(){
            return{
                isshow:false
            }
        },
        //监听返回键
        watch:{
            '$route':function (newValue,oldValue) {
                var path=newValue.path
                //判断是否是当前home页面
                if(path=='/home'){
                    this.isshow=false
                }else{
                    this.isshow=true
                }
            }
        },
        methods:{
            //返回上一页
            goBack(){
                this.$router.go(-1)
            }
        }
    }

</script>


