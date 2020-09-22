<template>
  <div class="featureBar-box">
    <div class="featureItem">
      <a href="https://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend_bg.jpg"/>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FeatureBar",
    props: {
      titles: {
        type: Array,
        default(){
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .featureBar-box{
    height: 250px;
  }
  .featureBar-box img{
    width: 100%;
  }
</style>
