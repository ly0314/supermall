<template>
  <div id="mine">
    <Nav_bar class="mine_navbar">
      <div slot="center"><h2>我的信息</h2></div>
    </Nav_bar>
  </div>
</template>



<script>
import Nav_bar from "@/components/common/nav_bar/Nav_bar"
export default {
  name: "Mine",
     components:{
    Nav_bar
  }
};
</script>

<style scoped>
#mine {
   background-color: rgba(255, 237, 7,0.2);


  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0px;

}
.mine_navbar{
    background-color:rgba(255, 237, 7);
}
</style>