<template>
  <div id="cart_list">
    <scroll ref="scroll" class="cart_scroll">
      <template>
        <cart-list-item
          v-for="(item, index) in $store.state.cartList"
          :key="index"
          :item="item"
        ></cart-list-item>
      </template>
    </scroll>
  </div>
</template>
<script>
  import Scroll from "components/common/betterscroll/Scroll";

  import CartListItem from "./CartListItem.vue";

  export default {
    data() {
      return {};
    },
    components: {
      Scroll,
      CartListItem
    },
    methods: {},
    activated() {
      this.$refs.scroll.refresh();
    }
  };
</script>
<style scoped>
  #cart_list {
    font-size: 0.68rem;
    height: 100vh;
  }

  /**
  * scroll
  */
  .cart_scroll {
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>
