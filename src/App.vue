<template>
  <div id="app">
    <Download />
    <router-view/>
  </div>
</template>

<script>
import Download from '@/components/downloadAPP'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    Download
  }
}
</script>

<style >
@media screen and (max-device-width: 320px) {
  body {
  	-webkit-text-size-adjust: none
  }
}
@media screen and (max-device-width: 480px) {
  body {
  	-webkit-text-size-adjust: none
  }
}
@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  body {
  	-webkit-text-size-adjust: none
  }
}
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  body {
  	-webkit-text-size-adjust: none
  }
}
body{
  background-color: #f8f8f8;
}
*{
  margin:0;
  padding: 0;
  color: #333;
  letter-spacing: 0.01rem;
}
.clear-fix{
  float:none;
}
</style>
