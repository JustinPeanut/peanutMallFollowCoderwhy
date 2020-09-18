<template>
  <recommend-bar>
    <recommend-item :recommend-a="item.link" v-for="item in recommend">
      <img slot="recommendImg" :src="item.image"/>
      <span slot="recommendText">{{item.title}}</span>
    </recommend-item>
  </recommend-bar>
</template>

<script>
import {RecommendItem,RecommendBar} from "./index";
  export default {
    name: "MainRecommend",
    components: {
      RecommendItem,
      RecommendBar
    },
    props: {
      recommend: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>

</style>
