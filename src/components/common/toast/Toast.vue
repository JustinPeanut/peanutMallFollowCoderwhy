<template>
  <div v-show="isShow" class="toast">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data(){
      return {
        message: "",
        isShow: false
      }
    },
    methods:{
      show(message,duration=1500){
        this.message = message
        this.isShow = true
        setTimeout(()=>{
          this.message = ""
          this.isShow = false
        },duration)
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
    z-index: 999;
  }
</style>
