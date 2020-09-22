<template>
<div class="recommendBox">
  <slot></slot>
</div>
</template>

<script>
  export default {
    name: "RecommendBar",
  }
</script>

<style scoped>
  .recommendBox{
    height: 100px;
    display: flex;
    text-align: center;
    font-size: 13px;
    margin: 10px 0px;
    border-bottom: 5px solid #f4f4f4;
  }

</style>
