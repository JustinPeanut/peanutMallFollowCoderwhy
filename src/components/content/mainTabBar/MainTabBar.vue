<template>
  <div>
    <tab-bar>
      <tab-bar-item path="home">
        <img src="~assets/img/tabbar/home.svg" slot="img-common-slot"/>
        <img src="~assets/img/tabbar/home_active.svg" slot="img-active-slot"/>
        <div slot="textSlot">首页</div>
      </tab-bar-item>

      <tab-bar-item path="category">
        <img src="~assets/img/tabbar/category.svg" slot="img-common-slot"/>
        <img src="~assets/img/tabbar/category_active.svg" slot="img-active-slot"/>
        <div slot="textSlot">分类</div>
      </tab-bar-item>

      <tab-bar-item path="shopCart">
        <img src="~assets/img/tabbar/shopcart.svg" slot="img-common-slot"/>
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="img-active-slot"/>
        <div slot="textSlot">购物车</div>
      </tab-bar-item>

      <tab-bar-item path="profile">
        <img src="~assets/img/tabbar/profile.svg" slot="img-common-slot"/>
        <img src="~assets/img/tabbar/profile_active.svg" slot="img-active-slot"/>
        <div slot="textSlot">我的</div>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/tabbar";
  import TabBarItem from "components/common/tabbar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
