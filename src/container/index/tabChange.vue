<template>
  <div class="tab-div">
    <div class="header">
      <h3 class="music-type">音乐榜单</h3>
      <router-link class="more" to='/moreMusic' v-if='isMore'>更多》</router-link>
    </div>
    <tabs :value='value' @getIndex ='getCurrentIndex'>
      <tab label='热歌榜' index='1'>
        <TabList :url='hotMusic'/>
      </tab>
      <tab label='新歌榜' index='2'>
        <TabList :url='newMusic'/>
      </tab>
      <tab label='经典老歌榜' index='3'>
        <TabList :url='classicMusic'/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import TabList from '../../components/tabList'
export default {
  name: 'TabChange',
  data(){
    return{
      value:1,  //默认tab切换显示第一个
      isMore:true,
      hotMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=5",
      newMusic:this.HOST +"/v1/restserver/ting?method=baidu.t/ing.billboard.billList&type=22&size=5",
      classicMusic:this.HOST +"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=22&size=5"
    }
  },
  components:{
    TabList
  },
  props:{
    url:{
        type:String,
        default:""
      }
  },
  methods:{
    getCurrentIndex(index){
      this.value = index;
    }
  },
}
</script>

<style scoped>
.tab-div{
  background-color: #fff;
  box-sizing: border-box;
  padding:0.2rem 0.4rem;
}
.header{
  width: 100%;
  height:0.52rem;
  line-height: 0.52rem;
  display: flex;
  padding:0.2rem 0 0.4rem 0;
}
.music-type{
  flex: 1 1 0%;
  float:left;
  font-size: 0.4rem;
  font-weight: 700;
}
.more{
  float:right;
  font-size: 0.24rem;
  text-decoration: none;
  color:#999;
}
.music-items{
  width:100%;
}
.music-info{
  width:100%;
  height:1.4rem;
  box-sizing: border-box;
  display:run-in;
}
.music-image{
  width:0.9rem;
  height:0.9rem;
  display: inline-block;
}
.music-image img{
  max-width: 100%;
}
.music-msg{
  display: inline-block;
  margin-left: 0.4rem;
}
.music-title{
  font-size: 0.3rem;
}
.music-author{
  font-size: 0.24rem;
  color:#999;
}
.download-icon{
  float: right;
  font-size: 0.24rem;
  color:#999;
}


</style>
