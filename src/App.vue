<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar";
import {request} from "network/home/request";

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}

const axiosInstance = request({
  url: "home/multidata"
}).then(res => {
  console.log(res);
})
</script>

<style>
  @import "assets/css/base.css";
</style>
