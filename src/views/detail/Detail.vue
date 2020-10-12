<template>
<div>
  <detail-nav-bar/>
  <detail-swiper :detailImage="detailImage"/>
</div>
</template>

<script>
  import DetailNavBar from "./childcomps/DetailNavBar";
  import DetailSwiper from "./childcomps/DetailSwiper";

  import {getDetail} from "network/detail/getDetail";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper
    },
    data(){
      return {
        detailId: "",
        detailImage: []
      }
    },
    created() {
      this.detailId = this.$route.params.iid
      console.log(this.detailId)
      getDetail(this.detailId).then(res => {
        // 保存轮播图信息
        this.detailImage = res.result.itemInfo.topImages
      })
    }
  }
</script>

<style scoped>

</style>
