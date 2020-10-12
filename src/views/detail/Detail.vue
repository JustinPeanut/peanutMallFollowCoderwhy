<template>
<div>
  <detail-nav-bar/>
  <detail-swiper :detailImage="detailImage"/>
  <detail-base-info :goods="goods"/>
</div>
</template>

<script>
  import DetailNavBar from "./childcomps/DetailNavBar";
  import DetailSwiper from "./childcomps/DetailSwiper";
  import DetailBaseInfo from "./childcomps/DetailBaseInfo";

  import {getDetail,Goods} from "network/detail/getDetail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo
    },
    data(){
      return {
        detailId: "",
        detailImage: [],
        goods: {}
      }
    },
    created() {
      this.detailId = this.$route.params.iid
      getDetail(this.detailId).then(res => {
        const data = res.result
        // 保存轮播图信息
        this.detailImage = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      })
    }
  }
</script>

<style scoped>

</style>
