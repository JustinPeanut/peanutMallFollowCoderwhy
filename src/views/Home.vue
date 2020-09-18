<template>
  <div>
    <nav-bar><div slot="center">购物街</div></nav-bar>
    <swiper>
      <swiper-item v-for="item in swiper">
        <div>
          <a :href="item.link">
            <img :src="item.image">
          </a>
        </div>

      </swiper-item>
    </swiper>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeData} from "../network/home/HomeGetAllData.js";
  import {Swiper, SwiperItem} from "../common/swiper/index";
  export default {
    name: "Home",
    components:{
      NavBar,
      Swiper,
      SwiperItem
    },
    data(){
      return {
        swiper: []
      }
    },
    created() {
      getHomeData().then(res => {
        this.swiper = res.data.banner.list;
      })
    }
  }
</script>

<style scoped>

</style>
