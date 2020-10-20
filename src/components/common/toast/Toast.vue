<template>
  <div v-show="isShow" class="toast">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      message: {
        type: String,
        default(){
          return "默认字符串"
        }
      },
      isShow:{
        type: Boolean,
        default() {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    background: rgba(0,0,0,0.7);
    padding: 10px;
    transform: translate(-50%,-50%);
    color: #eee;
  }
</style>
