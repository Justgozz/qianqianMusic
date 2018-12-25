<template>
  <div class='home'>
    <TopNav />
    <HttpRequest :url='todayMusic' title="今日推荐" :isMore='mfalse' />
    <HttpRequest :url='hotMusic' title="热门歌单" :isMore='mtrue' />
    <HttpRequest :url='newMusic' title="新歌速递" :isMore='mtrue' />
    <Banner />
    <TabChange />
  </div>
</template>

<script>
import TopNav from '../components/TopNav'
import HttpRequest from './index/httpRequest'
import Banner from '../components/banner'
import TabChange from './index/tabChange'

export default {
  name: 'Home',
  components:{
    TopNav,
    HttpRequest,
    Banner,
    TabChange
  },
  data(){
    return{
      mtrue:true,
      mfalse:false,
      todayMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=6",
      hotMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=6",
      newMusic:this.HOST +"/v1/restserver/ting?method=baidu.t/ing.billboard.billList&type=22&size=3"
    }
  }

}
</script>

<style scoped>

</style>
