<template>
  <div id="home">

    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" @scrolling="scroll" :probe-type="3">
      <div class="main-swiper">
        <main-swiper  :swiper="swiper"></main-swiper>
      </div>
      <main-recommend :recommend="recommend"></main-recommend>
      <feature-bar/>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"/>
      <good-list class="goodList" :goods="showGood"/>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"/>

  </div>

</template>

<script>
  import {getHomeData,getHomeGoods} from "network/home/HomeGetAllData.js";

  import Scroll from "components/common/betterscroll/Scroll";
  import NavBar from "components/common/navbar/NavBar";
  import MainSwiper from "components/common/swiper/MainSwiper";
  import MainRecommend from "components/common/recommendbar/MainRecommend"
  import FeatureBar from "./featurebar/FeatureBar";
  import TabControl from "components/common/tabcontrol/TabControl";
  import GoodList from "components/content/goodslist/GoodList";
  import BackTop from "components/content/backtop/BackTop";

  export default {
    name: "Home",
    components:{
      GoodList,
      NavBar,
      MainSwiper,
      MainRecommend,
      FeatureBar,
      TabControl,
      Scroll,
      BackTop
    },
    data(){
      return {
        swiper: [],
        recommend: [],
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []}
        },
        goodType: "pop",
        isShow: false
      }
    },
    computed: {
      showGood(){
        return this.goods[this.goodType].list;
      }
    },
    created() {
      // 获取首页导航和推荐数据
      this.getHomeData();
      // 获取商品列表
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      /**
       * 请求相关
       */
      getHomeData(){
        getHomeData().then(res => {
          this.swiper = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page ++;
        })
      },
      /**
       * 交互相关
       */
      scroll(position){
        this.isShow = (-position.y) > 1000;
      },
      // 回到顶部
      backTop(){
        this.$refs.scroll.scrollTo(0,0);
      },
      tabClick(index){
        switch (index) {
          case 0: this.goodType = "pop"; break;
          case 1: this.goodType = "new"; break;
          case 2: this.goodType = "sell"; break;
        }
      }
    }
  }
</script>

<style scoped>
  #home{
    position: relative;
    height: 100vh;

  }

  .nav-bar{
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    z-index: 9;
    padding-bottom: 43px;
  }

  .tab-control{
    /*两个要混合使用*/
    position: sticky;
    top: 43px;/*顶部navbar的高度*/
    z-index: 9;
  }

  .main-swiper{
    margin-top: 44px;
  }

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }

</style>

