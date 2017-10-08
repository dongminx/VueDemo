<template>
    <div class='temp'>
        <div class="title">
            <ul>
                <li>
                    <a @click='getImagesData(0)'>全部</a>
                </li>
                <li v-for="item in ImageListData">
                    <a @click='getImagesData(item.id)'>{{item.title}}</a>
                </li>
            </ul>
        </div>
        <div class="images">
            <ul>
                <li v-for="item in ImagesData">
                    <router-link v-bind='{to:"/photoinfo/"+item.id}'>
                        <img :src="item.img_url" alt="">
                        <div class="zhaiyao">{{item.zhaiyao}}</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .title ul{
        padding:0;
        height: 50px;
        line-height: 40px;
        list-style: none;
        display:flex;
        justify-content: space-between;
        white-space: nowrap;
        overflow-x: auto;
        overflow-y: hidden;
    }
    .title ul li{
        padding-left:5px;
    }
    .title ul li a{
        font-size: 12px;
    }
    .images img{
        width: 100%;
    }
    .images ul{
        padding: 0;
        list-style: none;
    }
    .images ul li{
        position: relative;
    }
    .zhaiyao{
        padding:10px;
        color: #fff;
        font-size: 12px;
        background: rgba(1,1,1,0.5);
        position: absolute;
        bottom:0;
        left:0;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../../tool/common.js'
    export default{
        data(){
            return{
                ImageListData:[],
                ImagesData:[]
            }
        },
        created(){
            this.getImagelistData();
            this.getImagesData(0);
        },
        methods:{
            getImagelistData(){
                var url=`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getimgcategory`
                this.$http.get(url).then(
                        res=>{
                            this.ImageListData=res.body.message
                        },
                        res=>{
                            console.log('列表请求失败')
                        }
                )
            },
            getImagesData(id){
                var url=`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getimages/${id}`;
                this.$http.get(url).then(
                        res=>{
                            this.ImagesData=res.body.message
                        },
                        res=>{
                            console.log('请求图片信息失败')
                        }
                )
            }
        }
    }
</script>


