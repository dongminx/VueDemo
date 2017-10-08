<template>
    <div class="temp">
        <div class="title">
            <lg-preview></lg-preview>
            <h3>{{TxtData.title}}</h3>
            <span>{{TxtData.click}}浏览数 分类:经济民生</span>
        </div>
        <div class="images">
            <!--mui九宫格-->
            <div class="mui-content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li v-for='item in ImageData' class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <img :src="item.src" v-preview="item.src">
                    </li>
                </ul>
            </div>
        </div>
        <div class="content">
            <p v-html="TxtData.content"></p>
        </div>
        <!--提交展示评论封装到sub/comments.vue中-->
        <!--评论部分-->
        <comments :discussID="sendID"></comments>
    </div>

</template>

<style scoped>
    .title{
        padding:5px;
    }
    .title h3{
        font-size: 16px;
        color: #007AFF;
    }
    .title span{
        font-size: 12px;
        color:#8f8f94;
    }
    .images{
        margin: 0;
        padding: 0;
    }
    .images ul{
        list-style: none;
    }
    .images .mui-content li{
        padding:0;
    }
    .images img{
        width: 120px;
    }
    .content {
        margin:5px;
    }

</style>

<script type=text/ecmascript-6>
    import common from '../../tool/common.js'
    import comments from '../sub/comments.vue'
    export default{
        data(){
            return{
                ImageData:[],
                TxtData:{},
                sendID:0
            }
        },
        components:{
            comments
        },
        props:["id"],
        created(){
            var id= this.$route.params.id
            this.getImageData(id)
            this.getTxtData(id)
            this.sendID = id
        },
        methods:{
            //获取图片信息
            getImageData(id){
                var url =`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getthumimages/${id}`
                this.$http.get(url).then(
                        res=>{
                            this.ImageData=res.body.message
                        },
                        res=>{
                            console.log('图片信息请求失败')
                        }
                )
            },
            //获取图文信息
            getTxtData(id){
                var url=`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getimageInfo/${id}`
                this.$http.get(url).then(
                        res=>{
                            this.TxtData=res.body.message[0]
                        },
                        res=>{
                            console.log('图片详情请求失败')
                        }
                )
            }
            //获取评论信息sub/comments.vue中
        }
    }
</script>


