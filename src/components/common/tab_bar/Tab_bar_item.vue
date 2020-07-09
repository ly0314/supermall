
<template>
  <div class="Tab_bar_item" @click="itemclick">
    <div v-if="!isactive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- <div v-bind:style="styleactive"><slot name="item-text"></slot></div> -->
  </div>
</template>

<script>
export default {
  name: "Tab_bar_item",
  props: {
    path: String,
    active_color: {
      type: String,
      default: "hotpink"
    }
  },
  data() {
    return {};
  },
  computed: {
    isactive() {
      //当前活跃路由的path indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。注释：如果要检索的字符串值没有出现，则该方法返回 -1。
      return this.$route.path.indexOf(this.path) !== -1;
    },
    styleactive() {
      // return this.isactive ? {color:this.active_color}:{} //设置文字颜色
    }
  },
  methods: {
    itemclick() {
      //在url中添加当然路由的path
      this.$router.replace(this.path);
    }
  }
};
</script>



<style>
.Tab_bar_item {
  /*平分居中 */
  flex: 1;
  text-align: center;
  /* font-size: 10px;
  margin-top: 5px;*/
}

.Tab_bar_item img {
  width: 63.7px;
  height: 49px;
  /* 去掉图片下边距 */
  vertical-align: middle;
}
</style>