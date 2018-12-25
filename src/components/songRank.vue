<template>
  <div class='song-rank'>
    <SongList :data='musicData' :img='typeImg'/>
  </div>
</template>

<script>
import SongList from './songList'
export default {
  name: 'SongRank',
  data(){
    return{
      musicData:[],
      typeImg:''
    }
  },
  components:{
    SongList
  },
  props:{
    url:{
        type:String,
        default:""
      }
  },
  mounted(){
    this.$axios.get(this.url)
    .then(res => {
      this.musicData = res.data.song_list
      this.typeImg = res.data.billboard.pic_s192
      console.log(res);
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
</script>

<style scoped>
  .song-rank{
    overflow: hidden;
  }
</style>
