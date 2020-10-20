<template>
  <div class="bottom">
    <div class="check-content">
      <cart-check-button class="check-button" :is-checked="isCheckedAll" @click.native="checkedChange"/>
      <span>全选</span>
    </div>
    <div class="total">总计：{{totalPrice}}</div>
    <div class="calc" @click="goToCalc">去计算({{cartCheckedLength}})</div>

  </div>

</template>

<script>
  import CartCheckButton from "./CartCheckButton";
  import {mapGetters} from "vuex"
  export default {
    name: "CartBottomBar",
    components:{
      CartCheckButton
    },
    computed: {
      ...mapGetters(['getCartList']),
      cartCheckedLength(){
        return this.getCartList.filter(item => item.checked == true).length
      },
      totalPrice(){
        return '￥'+ this.getCartList.filter(item => item.checked == true)
          .reduce((previousValue, item) => {
            return previousValue + item.price * item.count
          },0).toFixed(2)
      },
      isCheckedAll(){
        if(this.getCartList.length == 0){
          return false
        }
        return this.cartCheckedLength == this.getCartList.length

      }
    },
    methods: {
      checkedChange(){
        // 如果全部选中，取消选中
        let checkedFlag = !this.isCheckedAll
        this.getCartList.forEach(item => (item.checked = checkedFlag))
      },
      goToCalc(){
        if(this.cartCheckedLength == 0){
          this.$toast.show("请添加商品")
        }
      }
    }
  }
</script>

<style scoped>
  .bottom{
    width: 100%;
    position: absolute;
    bottom: 49px;
    height: 40px;
    display: flex;
    background-color: #eeeeee;
    align-items: center;
    font-size: 12px;
  }
  .check-content{
    position: relative;
    display: flex;
    line-height: 49px;
    margin-left: 10px;
    width: 90px;
  }
  .total{
    flex: 1;
  }
  .calc{
    text-align: center;
    line-height: 40px;
    height: 100%;
    width: 90px;
    background-color: #eb4868;
  }
</style>
