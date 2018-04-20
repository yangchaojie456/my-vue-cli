<template>
  <div class="my_center_info">
      <p>账户信息账户信息账户信息</p>
      <hr>
      <hr>
      <div>
        <p>{{author}}</p>
        <P>{{job}}</P>
      </div>
      <p>清除本地token</p>
      <button @click="logout">退出登录</button>
      <p>更新服务器端token，使本地token失效，从而变为<strong>未登录</strong>状态</p>
      <button @click="updateServerToken">退出登录</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      author:'',
      job:''
    }
  },
  methods:{
    logout(){
      this.$store.commit('deleteToken')
      this.$router.push('/index')
    },
    updateServerToken(){
      this.$ajax('updateServerToken').then(res=>{
        if(res.data.success){
          // this.$store.commit('deleteToken')
          // this.$router.push('/index')
        }
      })
    }
  },
  mounted(){
    this.$ajax('getAuthor').then(res=>{
      let result = res.data
      if(result.success){
        [this.author,this.job] = [result.data.name,result.data.job]
      }else{
        alert(result.msg)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.my_center_info{

}
</style>


