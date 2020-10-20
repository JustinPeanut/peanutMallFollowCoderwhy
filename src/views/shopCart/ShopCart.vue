<template>
  <div class="shopCart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>



</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import CartList from "./childcomps/CartList";


  import {mapGetters} from "vuex"
  export default {
    name: "ShopCart",
    components: {
      NavBar,
      CartList
    },
    computed: {
      ...mapGetters({
        length:'getShopLength'
      })
    }
  }
</script>

<style scoped>
.nav-bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
