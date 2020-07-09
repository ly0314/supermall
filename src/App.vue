<template>
  <div id="app">
    <router-view></router-view>
    <Tab_main></Tab_main>
  </div>

</template>


<script>
import Tab_main from "@/components/content/tab_bar/Tab_main";
export default {
  name: "app",
  components: {
    Tab_main,
   
  }
  //懒加载component: () => import('./views/tab_bar/Tab_bar'),
};
</script>
//引入css
<style>
@import url(./assets/css/base.css);
</style>
