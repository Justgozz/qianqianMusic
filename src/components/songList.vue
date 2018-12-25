<template>
  <div class='song-list'>
    <div class="song-item" >
      <div class="list-img">
        <img :src="img" alt="">
      </div>
      <div class="song-info" v-for='(item,index) in data' :key='index'>
        <i>{{item.rank}}</i>
        <div class="song-title">{{item.title}} - <span>{{item.author}}</span></div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
 import SongRank from './songRank'
export default {
  name: 'SongList',
  props:{
    data:{
      type:Array,
      default:function(){
        return[]
      }
    },
    img:{
      type:String,
      default:''
    }
  },
  components:{
    SongRank
  }
}
</script>

<style scoped>
  .song-list{
    margin: 0 auto;
    padding: 0.2rem 0.3rem;
    overflow: hidden;
  }
  .song-list hr{
    margin-top: 0.4rem;
    color:#eee;
  }
  .list-img{
    width:1.92rem;
    height:1.92rem;
    float:left;
  }
  .list-img img{
    width:100%;
    height:100%;
  }
  .song-info{
    float:left;
    width:4.4rem;
    height: 0.6rem;
    line-height: 0.2rem;
    padding-left: 0.5rem;
  }
  .song-title{
    font-size: 0.32rem;
    width: 92%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 0.4rem;
    line-height: 0.34rem;
    padding-left: 0.4rem;
  }
  .song-info i{
    color: #fa6644;
    font-size: 0.32rem;
    font-weight:bold;
  }
  .song-item{
    overflow:hidden;
  }
</style>
