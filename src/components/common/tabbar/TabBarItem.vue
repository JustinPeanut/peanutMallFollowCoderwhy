<template>
  <div class="tab-item" @click="itemClick">
        <slot v-if="!isActive" name="img-common-slot"></slot>
        <slot v-else name="img-active-slot"></slot>
    <div :style="isTextActive">
        <slot name="textSlot"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String
        },
      textColor: {
        type: String,
        default: "red"
      }
    },
    methods: {
      itemClick(){
        this.$router.replace(this.path);
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) != -1;
      },
      isTextActive(){
        return this.isActive ? {color: this.textColor}: {}
      }
    }
  }
</script>

<style scoped>
  .tab-item{
    height: 49px;
    text-align: center;
    flex: 1;
  }
  .tab-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin: 4px 0 2px 0;
  }
  .active{
    color: red
  }
</style>
