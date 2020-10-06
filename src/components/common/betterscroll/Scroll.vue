<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    props:{
      probeType: {
        type: Number,
        default(){
          return 0
        }
      }
    },
    data(){
      return {
        bs: null
      }
    },
    mounted() {
      this.bs = new BScroll(this.$refs.wrapper,{
        click: true,
        probeType: this.probeType
      });
      this.bs.on('scroll',(position) => {
        this.$emit("scrolling",position);
      });
    },
    methods:{
      scrollTo(x,y,time=300){
        this.bs.scrollTo(x,y,time);
      }
    }
  }
</script>

<style scoped>
</style>
