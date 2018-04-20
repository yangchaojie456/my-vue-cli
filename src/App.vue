<template>
  <div id="app">
    <my-header></my-header>
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
      </div>
      <router-view/>
  
    </mt-loadmore>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myFooter from '@/components/public/footer.vue'
  import myHeader from '@/components/public/header.vue'
  export default {
    name: "App",
    data(){
      return{
        topStatus:''
      }
    },
    components: {
      myFooter,
      myHeader
    },
    methods: {
      handleTopChange(status) {
        this.topStatus = status;
      },
      loadTop() {
  
        this.$refs.loadmore.onTopLoaded();
      }
    }
  };
</script>

<style lang="scss">
  body,html,ul,li,p,h1,h2,h3,h4{
    padding:0;
    margin: 0;
    box-sizing: border-box;
  }
  li{
    list-style: none;
  }
  button{
    background: none;
    border:none;
    outline: none;
    display: block;
    width: 80%;
    height: 40px;
    margin: 20px auto;
    border: 1px solid #333;
    &:active {
      border-top: none;
      border-left: none;
      border-right: none;
    }
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
  }
</style>
