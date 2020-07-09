
<template>
  <div id="home">
    <Nav_bar class="home_navbar">
      <div slot="center">
        <h2>购物街</h2>
      </div>
    </Nav_bar>
    <Banner v-bind:banners="banners"></Banner>
    <Recommend v-bind:recommends="recommends"></Recommend>
    <Show></Show>
    <Tab_control class="Tab_control" v-bind:title="['流行','新款','精选']"></Tab_control>

    <div>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
      <h2>商品信息</h2>
    </div>
  </div>
</template>



<script>
import Nav_bar from "@/components/common/nav_bar/Nav_bar";
import Banner from "@/views/home/banner/Banner";
import Recommend from "@/views/home/banner/Recommend";
import Show from "@/views/home/banner/Show";
import Tab_control from "@/components/content/tab_control/Tab_control";

import { getHomedata } from "../../network/home";

export default {
  name: "Home",
  components: {
    Nav_bar,
    Banner,
    Recommend,
    Show,
    Tab_control
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    //生命周期函数 创建完成请求数据
    getHomedata().then(res => {
      [];
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>




<style scoped>
#home {
  margin-top: 50px;
}
.home_navbar {
  background-color: rgba(255, 237, 7);
  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  z-index: 3;
}
.Tab_control {
  position: sticky;
  top: 49px;
}
</style>