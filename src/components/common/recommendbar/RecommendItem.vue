<template>
  <div class="recommendItem">
    <a :href="recommendA">
      <slot name="recommendImg"></slot>
      <div>
        <slot name="recommendText"></slot>
      </div>

    </a>

  </div>

</template>

<script>
  export default {
    name: "RecommendItem",
    props: {
      recommendA: {
        type: String,
        default: "javascript:;"
      }
    }
  }
</script>

<style scoped>
  .recommendItem img{
    width: 65px;
    height: 65px;
  }
  .recommendItem{
    flex: 1;
  }
</style>
