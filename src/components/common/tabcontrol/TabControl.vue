<template>
  <div class="tabControl-box">
    <div class="title-list" v-for="(title,index) in titles" :class="{active: isActive(index)}" @click="setActive(index)">
      <span>{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      isActive(index){
        return this.currentIndex == index;
      },
      setActive(index){
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .tabControl-box{
    display: flex;
    text-align: center;
    height: 20px;
    line-height: 20px;
    background-color: #ffffff;
  }
  .title-list{
    flex: 1;
  }
  .tabControl-box .active{
    color: var(--color-high-text);
  }
  .tabControl-box .active span{
    border-bottom: 4px solid var(--color-tint);
  }
</style>
