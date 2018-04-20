<template>
  <div class="my_footer">
      <ul>
          <router-link to="/index" tag="li">
            首页
          </router-link>

          <router-link to="/center" tag="li">
            个人中心
          </router-link>          
      </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.my_footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  border: 1px solid #eee;
  ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    text-align: center;
    li {
      flex-grow: 1;
      border-collapse: collapse;
      background: #fff;
      &:active{
          background: #ddd;
      }
      &.router-link-active{
          background: #ddd;
      }
    }
  }
}
</style>


