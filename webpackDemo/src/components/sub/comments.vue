<template>
    <div class="temp">
        <!--提交评论-->
        <div class="discuss">
            <div class="discusstitle">
                <h4>提交评论</h4>
                <textarea placeholder='请输入评论内容' ref="textArea"></textarea>
                <mt-button type="primary" size="large" @click='postDisscussData'>发表</mt-button>
            </div>
        </div>
        <div class='show'>
            <div class="showtitle">
                <hr>
                <h4>展示数据</h4>
                <hr>
                <ul>
                    <li v-for="item in commentsData">
                        <div class="content">{{item.content}}</div>
                        <div class="con-bottom">
                            <p>{{item.user_name}}</p>
                            <p>{{item.add_time | filter('YYYY-MM-DD hh:mm:ss')}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .show ul{
        list-style: none;
    }
    .discuss,.show{
        margin:5px;
    }
    .show p{
        color:royalblue;
    }
    .show .showtitle ul li .con-bottom{
        display: flex;
        justify-content: space-between;
    }
    .show .showtitle ul li .content{
        font-size: 14px;
        color:#a9acb1;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../../tool/common.js'
    import { Toast } from 'mint-ui';
    export default{
        data(){
            return{
                commentsData:[]
            }
        },
        props:['discussID'],
        created(){
            this.getcommentsData()
//            this.getDisscussData()
        },
        methods:{
            //获取评论信息
            getcommentsData(){
                var url =`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getcomments/${this.discussID}?pageindex=1`
                this.$http.get(url).then(
                        res=>{
                            //console.log(res);
                            this.commentsData=res.body.message
                        },
                        res=>{
                            console.log('获取评论信息失败')
                        }
                )
            },
            //发送评论信息
            postDisscussData(){
//                var id=this.$route.params.id
                var url=`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/postcomment/${this.discussID}`
                var content=this.$refs.textArea.value
                if(!content || content.trim().length <= 0){
                    Toast('提交评论不能为空');
                    return;
                }
                this.$http.post(url,{content:content},{emulateJSON:true}).then(
                        res=>{
                            Toast('评论提交成功');
                            //清空textarea内容
                            this.$refs.textArea.value=''
                            //获取评论数据
                            this.getcommentsData(this.discussID)
                        },
                        res=>{
                            console.log('评论提交失败')
                        }
                )
            }
        }
    }
</script>


