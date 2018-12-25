<template>
  <div class='top-nav'>
    <ul>
      <router-link to='/home' tag='li'>首页</router-link>
      <router-link to='/category' tag='li'>分类</router-link>
      <router-link to='/list' tag='li'>榜单</router-link>
      <router-link to='/mine' tag='li'>我的</router-link>
      <router-link to='/search' tag='li'>搜索</router-link>
      <router-link to='/singer' tag='li'>歌手</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data(){
    return{

    }
  }
}
</script>

<style scoped>
  .top-nav{
    box-sizing: border-box;
    height:0.88rem;
    line-height: 0.88rem;
    background-color: #f3f3f3;
    margin-bottom: 0.04rem;
  }
  .top-nav ul{
    width:100%;
  }
  .top-nav ul li{
    width:16%;
    height:0.88rem;
    float:left;
    font-size: 0.34rem;
    display:inline-block;
    text-align: center;
    cursor: pointer;
  }
  .active{
  border-bottom: 0.04rem solid #e13228;
}
</style>
