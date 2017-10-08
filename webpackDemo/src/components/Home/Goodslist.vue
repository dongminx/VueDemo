<template>
    <div class="temp">
        <div class="mui-content" style="background-color:#fff">
            <ul class="mui-table-view mui-grid-view">
                <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item in GoodsData">
                    <router-link v-bind='{to:"/goodsinfo/"+item.id}'>
                    <!--<router-link to="/goodsinfo">-->
                        <img class="mui-media-object" :src="item.img_url">
                        <div class="show">{{item.title}}</div>
                        <span class="sell">￥{{item.sell_price}}</span>
                        <del class="market">￥{{item.market_price}}</del>
                        <span class="stock">热卖中剩余{{item.stock_quantity}}件</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .show{
        text-align: center;
        font-size: 12px;
        white-space: normal;
        color:#7f7f7f;
    }
    .sell,.market{
        font-size: 12px;
        color: #7f7f7f;
    }
    .stock{
        font-size:10px;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../../tool/common.js'
    export default{
        data(){
            return{
                GoodsData:[]
            }
        },
        created(){
          this.getGoodsData(1)
        },
        methods:{
            getGoodsData(number){
                var url=`${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getgoods?pageindex=${number}`
                this.$http.get(url).then(
                        res=>{
                            this.GoodsData=res.body.message
//                            console.log(res)
                        },
                        res=>{
                            console.log('图片详情请求失败')
                        }
                )
            }
        }
    }
</script>


