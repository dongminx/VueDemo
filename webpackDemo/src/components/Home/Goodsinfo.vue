<template>
    <div class="temp">
        <!--商品轮播图-->
        <Lunbo :lunboData="phoneLunboData"></Lunbo>
        <div class="goodsinfo">
            <hr>
            <h4>{{GoodsInfo.title}}</h4>
            <hr>
            <span>市场价:<del>￥{{GoodsInfo.market_price}}</del></span>
            <span>销售价:<i class="sellprice">￥{{GoodsInfo.sell_price}}</i></span>
        </div>
        <div class="count">
            购买数量:&nbsp;&nbsp;<Number v-on:send="getNumber"></Number>
        </div>
        <div class="button">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
        </div>
        <hr>
        <div>
            <h6>商品参数</h6>
        </div>
        <hr>
        <div class="goods">
            <ul>
                <li>商品货号:{{GoodsInfo.goods_no}}</li>
                <li>库存情况:{{GoodsInfo.stock_quantity}}</li>
                <li>上架时间:{{GoodsInfo.add_time | filter('YYYY-MM-DD')}}</li>
            </ul>
        </div>
        <hr>
        <div class="buttons">
            <mt-button plain type="primary" size="large" @click="goToDesc">图文描述</mt-button>
            <mt-button class="btn" plain type="danger" size="large" @click="goToComments">商品评论</mt-button>
        </div>
    </div>
</template>

<style scoped>
    .goodsinfo h4{
        font-size: 18px;
        color:#0062cc;
    }
    span,del{
        font-size: 12px;
    }
    .sellprice{
        font-style: normal;
        color: red;
        font-size: 16px;
        font-weight: 600;
    }
    .count{
        margin-top: 10px;
        display: flex;
        font-size: 14px;
    }
    .button{
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
    }
    .goods ul{
        list-style: none;
    }
    .goods ul li{
        font-size: 14px;
    }
    .btn{
        margin-top: 5px;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../../tool/common.js'
    import Lunbo from '../sub/Lunbo.vue'
    import Number from '../sub/Number.vue'
    export default{
        data(){
            return{
                GoodsInfo:{},
                phoneLunboData:[]
            }
        },
        components:{
            Lunbo,
            Number
        },
        created(){
            var id=this.$route.params.id
            this.getGoodsInfo(id)
            this.getLunboData(id)
        },
        props:['id'],
        methods:{
            //请求当前页面中的基本信息
            getGoodsInfo(id){
                var url=`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/goods/getinfo/${id}`
                this.$http.get(url).then(
                        res=>{
                            this.GoodsInfo=res.body.message[0]
                        },
                        res=>{
                            console.log('商品详情请求失败')
                        }
                )
            },
            //请求页面中的轮播图信息
            getLunboData(id){
                var url=`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getthumimages/${id}`
                this.$http.get(url).then(
                        res=>{
                            this.phoneLunboData=res.body.message
                        },
                        res=>{
                            console.log('商品图片请求失败')
                        }
                )
            },
            // 获取子组件发来的数据
            getNumber(number){
//                console.log(number)
                this.subNumber = number
            },
            //跳转到图文描述页面
            goToDesc(){
                var id=this.$route.params.id
                this.$router.push({name:'goodsdesc',params:{id:id}})
            },
            //跳转到商品评论
            goToComments(){
                var id=this.$route.params.id
                this.$router.push({name:'comments',params:{id:id}})
            }
        }
    }
</script>


