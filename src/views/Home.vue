<template>
  <div>
    <nav-bar><div slot="center">购物街</div></nav-bar>
    <main-swiper :swiper="swiper"></main-swiper>
    <main-recommend :recommend="recommend"></main-recommend>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeData} from "../network/home/HomeGetAllData.js";
  import MainSwiper from "../components/common/swiper/MainSwiper";
  import MainRecommend from "components/common/recommendbar/MainRecommend"
  export default {
    name: "Home",
    components:{
      NavBar,
      MainSwiper,
      MainRecommend
    },
    data(){
      return {
        swiper: [],
        recommend: []
      }
    },
    created() {
      getHomeData().then(res => {
        this.swiper = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>

</style>
