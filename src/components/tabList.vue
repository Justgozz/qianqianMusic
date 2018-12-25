<template>
  <div class="music-items">
    <div class="music-info" v-for='(item,index) in data' :key='index'>
      <div class="music-image">
        <img :src="item.pic_big" alt="">
      </div>
      <div class="music-msg">
        <p class='music-title'>{{item.title}}</p>
        <p class='music-author'>{{item.author}}</p>
      </div>
      <div class="download-icon">
        <span>下载</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabList',
  props:{
    data:{
      type:Array,
      default:function(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
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
