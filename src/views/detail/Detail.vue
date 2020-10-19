<template>
<div class="detail">
  <detail-nav-bar @titleClick="titleClick" ref="nav"/>
  <scroll class="content" ref="scroll" :probe-type="3" @scrolling="detalScroll">
    <detail-swiper :detailImage="detailImage"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-param-info :paramInfo="goodsParam" ref="detailParam"/>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
  </scroll>
  <back-top @click.native="backTop" v-show="isShow"/>
  <detail-bottom-bar @addEvent="addCartList"/>
</div>
</template>

<script>
  import DetailNavBar from "./childcomps/DetailNavBar";
  import DetailSwiper from "./childcomps/DetailSwiper";
  import DetailBaseInfo from "./childcomps/DetailBaseInfo";
  import DetailShopInfo from "./childcomps/DetailShopInfo";
  import DetailParamInfo from "./childcomps/DetailParamInfo";
  import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";
  import DetailBottomBar from "./childcomps/DetailBottomBar";


  import Scroll from "components/common/betterscroll/Scroll";
  import {getDetail,Goods,Shop,GoodsParam} from "network/detail/getDetail";
  import mixin from "common/mixin/mixin";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailParamInfo,
      Scroll,
      DetailGoodsInfo,
      DetailBottomBar
    },
    data(){
      return {
        detailId: "",
        detailImage: [],
        goods: {},
        shop: {},
        goodsParam: {},
        detailInfo: {},
        detailOffsetY: [44],
        currentIndex: 0,
      }
    },
    created() {
      this.detailId = this.$route.params.iid
      // 获取商品信息
      getDetail(this.detailId).then(res => {
        const data = res.result
        // 保存轮播图信息
        this.detailImage = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        this.detailInfo = data.detailInfo


        this.$nextTick(() =>{
          this.detailOffsetY.push(this.$refs.detailParam.$el.offsetTop - 44)
          // 插入一个最大值，使之能够在区间内判断
          this.detailOffsetY.push(Number.MAX_VALUE)
        })
      })
      // 获取评论信息
      // getDetailRecommend().then(res => {
      //
      // })
    },
    mixins: [mixin],
    methods:{
      imageLoad(){
        this.$refs.scroll && this.$refs.scroll.refresh()
      },
      titleClick(index){
        // 跳转
        this.$refs.scroll.scrollTo(0,-this.detailOffsetY[index],100)
      },
      // 根据滚动改变标题的active
      detalScroll(position){

        // 判断backTop按钮是否显示
        this.isShow = (-position.y) > 1000

        for(let i = 0 ; i < this.detailOffsetY.length -1 ; i++){
          if(this.currentIndex != i && -position.y >= this.detailOffsetY[i] && -position.y < this.detailOffsetY[i+1]){
            this.currentIndex = i
            this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      // 添加商品
      addCartList(){
        const obj = {
          iid: this.detailId,
          desc: this.goods.desc,
          price: this.goods.realPrice,
          title: this.goods.title,
          img: this.detailImage[0]
        }
        this.$store.dispatch('addCart',obj)
      }
    },

  }
</script>

<style scoped>
  .detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px);
    overflow: hidden;

  }

</style>
