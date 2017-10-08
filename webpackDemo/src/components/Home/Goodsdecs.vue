<template>
    <div class="temp">
        <div class="title">
            <h4>{{descData.title}}</h4>
        </div>
        <div class="content">
            <p v-html="descData.content"></p>
        </div>
    </div>
</template>

<style scoped>
    .content {
        padding: 5px;
    }
    .title{
        text-align: center;
        color: orange;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../../tool/common.js'
    export default{
        data(){
            return {
                descData:{}
            }
        },
        props:['id'],
        created(){
            var id = this.$route.params.id
            this.getDescData(id)
        },
        methods:{
            getDescData(id){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/goods/getdesc/${id}`

                this.$http.get(url).then(
                        res=>{
                            this.descData = res.body.message[0]
                        },
                        res=>{
                            console.log('goodsdesc页面请求数据失败')
                        }
                )
            }
        }
    }
</script>


