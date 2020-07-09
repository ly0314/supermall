<template>
  <div class="Tab_control">
    <div class="Tab_control_item" v-for="(item,index) in title" :key="item" @click="onclick(index)" v-bind:class="{isactive:currentIndex === index}">
      <span>{{item}}</span>
    </div>
  </div>
</template>



<script>
export default {
  name: "Tab_control",

  props: {
    title: {
      type: Array
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    //onclick(index)传参 index赋值给currentIndex
    onclick: function(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.Tab_control {
  background-color: rgb(255, 255, 255); 
  
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-bottom: 5px solid rgb(241, 241, 241);
}
.Tab_control_item {
  font-weight: bold;
  flex: 1;
}

.isactive {
  color: rgba(255, 237, 7); 
 border-bottom: 3px solid rgba(255, 237, 7);
}
</style>