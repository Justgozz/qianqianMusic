<template>
  <div class='http-request'>
    <MusicBlock  :data='musicData' :title='title' :isMore='isMore'/>
  </div>
</template>

<script>
import MusicBlock from '../../components/musicBlock'
export default {
  name: 'HttpRequest',
  data(){
    return{
      musicData:[]
    }
  },
  components:{
    MusicBlock
  },
  props:{
    url:{
        type:String,
        default:""
      },
    title:{
        type:String,
        default:""
      },
      isMore:{
        type:[String,Boolean],
        default:""
      }
  },
  mounted(){
    this.$axios.get(this.url)
    .then(res => {
      this.musicData = res.data.song_list
      console.log(res);
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
</script>

<style scoped>
  .http-request{
    overflow: hidden;
    margin-bottom: 0.2rem;
  }
</style>
