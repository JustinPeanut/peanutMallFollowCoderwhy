<template>
  <div>
    <nav-bar><div slot="center">购物街</div></nav-bar>
    <main-swiper :swiper="swiper"></main-swiper>
    <main-recommend :recommend="recommend"></main-recommend>
    <feature-bar/>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"/>
    <good-list :goods="goods['pop'].list"/>

    <ul>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
      <li>con</li>
    </ul>
  </div>

</template>

<script>
  import {getHomeData,getHomeGoods} from "network/home/HomeGetAllData.js";

  import NavBar from "components/common/navbar/NavBar";
  import MainSwiper from "components/common/swiper/MainSwiper";
  import MainRecommend from "components/common/recommendbar/MainRecommend"
  import FeatureBar from "./featurebar/FeatureBar";
  import TabControl from "../../components/common/tabcontrol/TabControl";
  import GoodList from "../../components/content/goodslist/GoodList";

  export default {
    name: "Home",
    components:{
      GoodList,
      NavBar,
      MainSwiper,
      MainRecommend,
      FeatureBar,
      TabControl
    },
    data(){
      return {
        swiper: [],
        recommend: [],
        goods: {
          'pop': {page: 0,list: []},
          'new': {page: 0,list: []},
          'sell': {page: 0,list: []}
        }
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
      }

    }
  }
</script>

<style scoped>

  .tab-control{
    position: sticky;
    top: -1px;
    z-index: 9;
  }
</style>
