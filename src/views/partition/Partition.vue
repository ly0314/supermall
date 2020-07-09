<template>
  <div id="partition">
    <Nav_bar class="partition_navbar">
      <div slot="center"><h2>热门分类</h2></div>
    </Nav_bar>
  </div>
</template>



<script>
import Nav_bar from "@/components/common/nav_bar/Nav_bar"
export default {
  name: "Partition",
  components:{
    Nav_bar
  }
};
</script>

<style scoped>
#partition {
   background-color: rgba(255, 237, 7,0.2);


  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0px;
}
.partition_navbar{
    background-color:rgba(255, 237, 7);
}
</style>