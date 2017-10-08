<template>
    <div class="temp">
        <!--图片轮播部分代码,从mint-ui组建中获取-->
        <Lunbo :lunboData="msg"></Lunbo>
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/newslist">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">看新闻</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/imagelist">
                        <span class="mui-icon mui-icon-email"></span>
                        <div class="mui-media-body">看福利</div>
                    </router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goodslist">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">买买买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">写点啥</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">看片了</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon mui-icon-phone"></span>
                        <div class="mui-media-body">快约我</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>

</style>

<script type=text/ecmascript-6>
    import common from '../../tool/common.js'
    import Lunbo from '../sub/Lunbo.vue'
    export default {
//        es5写法
//        data:function () {
//            return{
//
//            }
//        }
        data(){
            return{
                msg:[]
            }
        },
        components: {
            Lunbo
        },
        created(){
            this.getLunboData()
        },
        methods:{
            getLunboData(){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getlunbo`
                //var url='http://182.254.146.100:8899/api/getlunbo'
                this.$http.get(url).then(
                        response=>{
                            //成功的回调
                           //console.log(response)
                            this.msg=response.body.message
                        },
                        response=>{
                            //失败的回调
                            console.log(response);
                        }
                )
            }
        }
    }
</script>


