<template>
<div>
  <el-carousel :interval="5000" arrow="always"  :height="bannerH +'px'">
    <el-carousel-item v-for="item in banners" :key="item.id">
      <a :href="item.link"> <img  :src="item.image"/></a>
    </el-carousel-item>
  </el-carousel>
</div>
</template>


<script>

export default {

name:"Banner",
props:['banners'],

  data () {
    return {
      bannerH:0,
    }
  },
  
  methods:{
    setBannerH(){
        
      this.bannerH = document.body.clientWidth / 2
    }
  },
  mounted(){
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
  },
  created(){}


}


</script>

<style scoped>

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
   
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

img{
    width: 100%;
}
</style>
