<template>
  <div class="music-container">
    <div class="music-block">
      <div class="header">
        <h3 class="music-type">{{ title }}</h3>
        <router-link class="more" to='/moreMusic' v-if='isMore'>更多》</router-link>
      </div>
      <div class="music-item">
        <div class="music-info" :key="index" v-for="(item,index) in data" :class="{'clear-padding': index%3 !== 1}">
          <img :src="item.pic_s500" alt="">
          <div class='music-title'>{{ item.title }}</div>
          <div class='music-author'>{{ item.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MusicBlock',
  props:{
    data:{
      type:Array,
      default:function(){
        return []
      }
    },
    title:{
      type:String,
      default:""
    },
    isMore:{
      type:[String,Boolean],
      default:false
    }
  }
}
</script>

<style scoped>
.music-block{
  background-color: #fff;
  padding:0.2rem 0.4rem;
}
.header{
  width: 100%;
  height:0.5rem;
  line-height: 0.5rem;
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
.music-item{
  width:100%;
  padding:0;
  overflow: hidden;
}
.music-info{
  width:32%;
  float: left;
  padding: 0 0.12rem;
  margin-bottom: 0.2rem;
}
.music-info img{
  width:100%;
  height:100%;
}
.clear-padding{
  padding: 0 !important;
}
.music-title{
  font-size: 0.24rem;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.music-author{
  font-size: 0.24rem;
   color: #999;
}
.music-item{
  margin-bottom: 0.3rem;
}
</style>
