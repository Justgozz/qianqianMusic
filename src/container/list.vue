<template>
  <div class='list'>
    <TopNav />
    <SongRank :url='newMusic'/>
    <SongRank :url='hotMusic'/>
    <SongRank :url='rockMusic'/>
    <SongRank :url='jazzMusic'/>
    <SongRank :url='popularMusic'/>
    <SongRank :url='billboardMusic'/>
    <SongRank :url='classicMusic'/>
    <SongRank :url='loveMusic'/>
    <SongRank :url='movieMusic'/>
    <SongRank :url='networkMusic'/>
    <div class="footer">
      <ul>
        <router-link to='/index' tag='li'>首页</router-link>
        <router-link to='/index' tag='li'>VIP</router-link>
        <router-link to='/index' tag='li'>意见反馈</router-link>
      </ul>
    </div>
    <div class="logo">
      <img src="https://static1.qianqian.com/web/st/images/footer-taihe.61004cb8653645fd.png" alt="">
    </div>
  </div>
</template>

<script>
import TopNav from '../components/TopNav'
import SongRank from '../components/songRank'
export default {
  name: 'List',
  components:{
    TopNav,
    SongRank
  },
  data(){
    return{
      //12-爵士,16-流行,21-欧美金曲榜,22-经典老歌榜,23-情歌对唱榜,24-影视金曲榜,25-网络歌曲榜
      newMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=3",
      hotMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=3",
      rockMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=11&size=3",
      jazzMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=12&size=3",
      popularMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=16&size=3",
      billboardMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=21&size=3",
      classicMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=22&size=3",
      loveMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=23&size=3",
      movieMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=24&size=3",
      networkMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=25&size=3"
    }
  }
}
</script>

<style scoped>
  .footer{
    margin: 0.4rem auto;
  }
  .footer ul{
    margin: 0 auto;
    display: flex;
  }
  .footer ul li{
    flex-grow: 1;
    font-size: 0.32rem;
    list-style: none;
    text-align: center;
    border-right:1px solid #bdbcbc;
  }
  .footer ul li:last-child{
    border:none;
  }
  .logo{
    width:100%;
    height:0.5rem;
    margin-top: 0.2rem;
    line-height: 0;
    padding-left: 2rem;
    box-sizing: border-box;
  }
  .logo img{
    width:2.88rem;
  }

</style>
