<template>
    <div class="Nav_bar">
        <div class="left"><slot name="left">left</slot></div>
        <div class="center"><slot name="center">center</slot></div>
        <div class="right"><slot name="right">right</slot></div>
   
    </div>
</template>



<script>

export default {

name:"Nav_bar"

}

</script>

<style scoped>
.Nav_bar{
    display: flex;
    height: 50px;
    line-height: 50px;
    text-align: center;
   
     box-shadow:0px 3px 15px rgba(0,0,0, 0.2);

}
.left,.right{
    width: 60px;
    
}
.center{
    flex: 1;
}


</style>