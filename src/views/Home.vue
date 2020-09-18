<template>
  <div>
    <nav-bar><div slot="center">购物街</div></nav-bar>
    <main-swiper :swiper="swiper"></main-swiper>
    <recommend-bar>
      <recommend-item :recommend-a="item.link" v-for="item in recommend">
          <img slot="recommendImg" :src="item.image"/>
          <span slot="recommendText">{{item.title}}</span>
      </recommend-item>
    </recommend-bar>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeData} from "../network/home/HomeGetAllData.js";
  import MainSwiper from "../components/common/swiper/MainSwiper";
  import RecommendBar from "../components/common/recommendbar/RecommendBar";
  import RecommendItem from "../components/common/recommendbar/RecommendItem";
  export default {
    name: "Home",
    components:{
      NavBar,
      MainSwiper,
      RecommendBar,
      RecommendItem
    },
    data(){
      return {
        swiper: [],
        recommend: []
      }
    },
    created() {
      getHomeData().then(res => {
        console.log(res);
        this.swiper = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>

</style>
