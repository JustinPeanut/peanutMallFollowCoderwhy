<template>
<div class="detail">
  <detail-nav-bar/>
  <scroll class="content" ref="scroll">
    <detail-swiper :detailImage="detailImage"/>
    <detail-base-info :goods="goods"/>
    <detail-shop-info :shop="shop"/>
    <detail-param-info :paramInfo="goodsParam"/>
    <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
  </scroll>

</div>
</template>

<script>
  import DetailNavBar from "./childcomps/DetailNavBar";
  import DetailSwiper from "./childcomps/DetailSwiper";
  import DetailBaseInfo from "./childcomps/DetailBaseInfo";
  import DetailShopInfo from "./childcomps/DetailShopInfo";
  import DetailParamInfo from "./childcomps/DetailParamInfo";
  import Scroll from "components/common/betterscroll/Scroll";
  import DetailGoodsInfo from "./childcomps/DetailGoodsInfo";

  import {getDetail,Goods,Shop,GoodsParam} from "network/detail/getDetail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailParamInfo,
      Scroll,
      DetailGoodsInfo
    },
    data(){
      return {
        detailId: "",
        detailImage: [],
        goods: {},
        shop: {},
        goodsParam: {},
        detailInfo: {}
      }
    },
    created() {
      this.detailId = this.$route.params.iid
      getDetail(this.detailId).then(res => {
        const data = res.result
        // 保存轮播图信息
        this.detailImage = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        this.detailInfo = data.detailInfo
      })
    },
    methods:{
      imageLoad(){
        this.$refs.scroll && this.$refs.scroll.refresh()
      }
    }
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
