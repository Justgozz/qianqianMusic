<template>
  <div class='swiper-div'>
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide :key="index" v-for='(item,index) in imgs'>
        <img :src="item" alt="">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data(){
    return{
      imgs:[
        require('../assets/img/b1.jpg'),
        require('../assets/img/b2.jpg'),
        require('../assets/img/b3.jpg'),
      ],
      swiperOption:{
            // 如果需要分页器
          pagination: {
          el: '.swiper-pagination',
        },
        autoplay:true,
        loop:true
      }
    }
  }
}
</script>

<style scoped>
.swiper-div{
  width:100%;
  box-sizing: border-box;
  padding:0.2rem;
}
.swiper-div img{
  width:100%;
  height:100%;
}

</style>
