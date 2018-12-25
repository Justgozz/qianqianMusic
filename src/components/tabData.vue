<template>
  <div class='tab-list'>
    <TabList :data='musicData' />
  </div>
</template>

<script>
import TabList from '../container/index/tabList'
export default {
  name: 'TabData',
  data(){
    return{
      musicData:[]
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

</style>
