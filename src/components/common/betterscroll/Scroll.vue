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
      },
      pullUpLoad: {
        type: Boolean,
        default(){
          return false;
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
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      this.bs.on('scroll',(position) => {
        this.$emit("scrolling",position);
      });
      this.bs.on('pullingUp',()=>{
        this.$emit("pullingUp")
      });
    },
    methods:{

      scrollTo(x,y,time=300){
        this.bs && this.bs.scrollTo(x,y,time);
      },
      refresh(){
        this.bs && this.bs.refresh();
      },
      finishPullUp(){
        this.bs && this.bs.finishPullUp();
      },
      getScrollY(){
        return this.bs.y
      }
    }
  }
</script>

<style scoped>
</style>
