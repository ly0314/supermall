<template>
  <div class="Recommend">
    <div v-for="item in recommends" :key="item.sort" class="Recommend_item">
      <a :href="item.link">
        <img :src="item.image" />
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Recommend",
  props: ["recommends"]
};
</script>

<style scoped>
.Recommend{
  border-bottom:10px solid rgb(241, 241, 241);
  display: flex;
  width: 100%;
  text-align: center;
  margin: 10px 0 20px 0;
}
.Recommend_item{
  flex: 1;
}
.Recommend_item img{
  width: 70%;
}
</style>
