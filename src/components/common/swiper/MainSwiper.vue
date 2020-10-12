<template>
  <swiper>
    <swiper-item v-for="item in swiper">
      <div>
        <a :href="item.link">
          <img :src="item.image" @load="swiperImageLoad">
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
    data(){
      return {
        isLoad: false
      }
    },
    props:{
      swiper: {
        type: Array,
        default: []
      }
    },
    methods:{
      swiperImageLoad(){
        if(!this.isLoad){
          this.$emit("swiperImageLoad")
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
