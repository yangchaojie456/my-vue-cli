<template>
  <div class="my_center">
      <p>个人中心个人中心个人中心个人中心</p>
      <hr>
      <hr>
      <router-link to="/center/center_info" tag="button">账户中心</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.my_center{
  text-align: center;
  
}
</style>
