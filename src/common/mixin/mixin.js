import BackTop from "components/content/backtop/BackTop";

export default {
  data(){
   return {
     isShow: false
   }
  },
  components: {
    BackTop
  },
  methods: {
    // 回到顶部
    backTop(){
      this.$refs.scroll.scrollTo(0,0);
    },
  }
}
