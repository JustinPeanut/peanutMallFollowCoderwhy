<template>
  <div id="home">

    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1" v-show="isFixed"/>
    <scroll class="content" ref="scroll" @scrolling="scroll" :probe-type="3" @pullingUp="pullingUp" :pull-up-load="true">
      <div class="main-swiper">
        <main-swiper  :swiper="swiper" @swiperImageLoad="swiperImageLoad"></main-swiper>
      </div>
      <main-recommend :recommend="recommend"></main-recommend>
      <feature-bar/>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"/>
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
        isShow: false,
        tabOffsetTop: 0,
        isFixed: false
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
    mounted() {
      if(this.$refs.scroll != undefined){
        // let refresh = this.debounce(this.$refs.scroll.refresh(),500)
        this.$bus.$on("loadImgItem",() =>{
          // refresh();
          this.$refs.scroll.refresh()
        })
      }

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
          this.$refs.scroll && this.$refs.scroll.refresh();
        })
      },
      /**
       * 交互相关
       */
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },
      scroll(position){
        // 判断backTop按钮是否显示
        this.isShow = (-position.y) > 1000
        // 判断tabControll吸顶
        this.isFixed = (-position.y) > this.tabOffsetTop + 44
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
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      pullingUp(){
        this.getHomeGoods(this.goodType);
        this.$refs.scroll.finishPullUp();
      },
      /**
       * 防抖动函数，但是在页面上会报错，原因不明
      debounce(func,delay){
        let timer = null
        return function (...args) {
          if(timer) clearTimeout(timer)
          timer = setTimeout(() => {
            func.apply(this,args)
          },delay)
        }
      }**/
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

