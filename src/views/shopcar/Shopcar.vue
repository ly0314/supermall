<template>
  <div id="shopcar">
    <Nav_bar class="shopcar_navbar">
      <div slot="center"><h2>购物车</h2></div>
    </Nav_bar>
  </div>
</template>



<script>
import Nav_bar from "@/components/common/nav_bar/Nav_bar"
export default {
  name: "Shopcar",
    components:{
    Nav_bar
  }
};
</script>

<style scoped>
#shopcar {
  background-color: rgba(255, 237, 7,0.2);


  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0px;
}
.shopcar_navbar{
    background-color:rgba(255, 237, 7);
}
</style>