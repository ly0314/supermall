
<template>
  <Tab_bar>
    <Tab_bar_item path="/home">  <!-- active_color="" 设置颜色-->
      <img slot="item-icon" src="@/assets/img/Tab_bar/home.png" alt />
      <img slot="item-icon-active" src="@/assets/img/Tab_bar/home_active.png" alt />
     <!--  <div slot="item-text">推荐</div>-->
    </Tab_bar_item>
    <Tab_bar_item path="/partition">
      <img slot="item-icon" src="@/assets/img/Tab_bar/partition.png" alt />
      <img slot="item-icon-active" src="@/assets/img/Tab_bar/partition_active.png" alt />
     <!--  <div slot="item-text">分类</div>-->
    </Tab_bar_item>
    <Tab_bar_item path="/shopcar">
      <img slot="item-icon" src="@/assets/img/Tab_bar/shopcar.png" alt />
      <img slot="item-icon-active" src="@/assets/img/Tab_bar/shopcar_active.png" alt />
     <!--  <div slot="item-text">购物车</div>-->
    </Tab_bar_item>
    <Tab_bar_item path="/mine">
      <img slot="item-icon" src="@/assets/img/Tab_bar/mine.png" alt />
      <img slot="item-icon-active" src="@/assets/img/Tab_bar/mine_active.png" alt />
     <!--  <div slot="item-text">我的</div>-->
    </Tab_bar_item>
  </Tab_bar>
</template>



<script>
import Tab_bar from "@/components/common/tab_bar/Tab_bar";
import Tab_bar_item from "@/components/common/tab_bar/Tab_bar_item";
export default {
  name: "Tab_main",
  components: {
    Tab_bar,
    Tab_bar_item
  }
};
</script>

<style scoped>
</style>