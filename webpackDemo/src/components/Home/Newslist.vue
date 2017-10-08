<template>
    <div class="temp">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newslistData">
                <!--<router-link to="/newsinfo">-->
                <router-link v-bind='{to:"/newsinfo/"+item.id}'>
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                    </div>
                    <p class="issue">
                        <span>发布时间:{{item.add_time | filter('YYYY-MM-DD HH:mm:ss')}}</span>
                        <span>点击量:{{item.click}}</span>
                    </p>
                </router-link>
            </li>
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--木屋-->
                        <!--<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--CBD-->
                        <!--<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->

        </ul>
    </div>
</template>

<style scoped>
    .issue{
        display: flex;
        justify-content: space-between;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../../tool/common.js'
    export default{
            data(){
            return{
                newslistData:[]
            }
        },
        created(){
            this.getNewsListData();
        },
        methods:{
            getNewsListData(){
                var url=`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getnewslist`
                this.$http.get(url).then(
                    res=>{
                        this.newslistData=res.body.message
                    },
                    res=>{
                        console.log('数据请求失败')
                    }
                )
            }
        }
    }
</script>


