<template>
  <nav-bar>
    <div slot="left" class="title-left">
      <img src="~assets/img/common/back.svg" @click="back"/>
    </div>
    <div slot="center" class="detail-title">
      <div class="title-span"
           :class="{active:index === currentIndex}"
           v-for="(item,index) in detailTitle"
           @click="titleClick(index)">
        {{item}}
      </div>
    </div>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        detailTitle:['商品','参数','评论','推荐'],
        currentIndex: 0
      }
    },
    created() {

    },
    methods:{
      titleClick(index){
        this.currentIndex = index
      },
      back(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
 .detail-title{
   display: flex;
   font-size: 13px;
 }
  .title-span{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .title-left{
    margin-top: 6px;
  }
</style>
