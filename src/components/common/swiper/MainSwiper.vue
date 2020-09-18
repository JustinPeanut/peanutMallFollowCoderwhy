<template>
  <swiper>
    <swiper-item v-for="item in swiper">
      <div>
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </div>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from "common/swiper/index.js";
  export default {
    name: "MainSwiper",
    components:{
      Swiper,
      SwiperItem

    },
    props:{
      swiper: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

</style>
