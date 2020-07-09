
<template>
    <div id="Tab_bar">
        <slot></slot>
    </div>
</template>

<script>

export default {
    name:"Tab_bar",
      components:{

  }
}
</script>



<style>
#Tab_bar{
  box-shadow:0px -3px 15px rgba(0,0,0, 0.2);
  display:flex;
  background-color:rgba(255, 237, 7);
  height: 49px;
  /* 定位 */
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

}

</style>