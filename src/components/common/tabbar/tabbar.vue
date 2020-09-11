<template>
  <div id="app">
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbar"
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    position: fixed;
    bottom: 0px;
    right: 0px;
    left: 0px;
    background-color: #f4f4f4;
  }

</style>
