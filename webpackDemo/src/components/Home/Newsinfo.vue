<template>
<div class="temp">
        <div class="title">
            {{NewsInfoData.title}}
        </div>
        <div class="otitle">{{NewsInfoData.add_time | filter('YYYY-MM-DD')}}浏览数:{{NewsInfoData.click}}分类:经济民生</div>
    <hr>
    <div v-html="NewsInfoData.content">
    </div>
</div>
</template>

<style scoped>
    .temp{
        margin-top:45px;
    }
    .title{
        font-size: 16px;
        color:blue;
        font-weight: bold;
    }
    .otitle{
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 12px;
        color: #6d6d72;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../../tool/common.js'
    export default{
        data(){
          return{
              NewsInfoData:{}
          }
        },
        props:['id'],
        created(){
            this.getNewsInfoData();
        },
        methods:{
            getNewsInfoData(){
                var id= this.$route.params.id
                var url=`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getnew/${id}`
                this.$http.get(url).then(
                        res=>{
                            this.NewsInfoData=res.body.message[0]
                        },
                        res=>{
                            console.log('请求页面失败')
                        }
                )
            }
        }
    }
</script>


