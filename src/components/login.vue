<template>
  <div class="my_login">
      <p>登录页面登录页面登录页面登录页面</p>
      <div>
          <input type="text" placeholder="用户名，默认admin" v-model="name">
      </div>
      <div>
          <input type="text" placeholder="密码，默认123456" v-model="password">
      </div>
      <div>
          <button @click="login">登录</button>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$ajax("login", { name: this.name, password: this.password }).then(
        res => {
          let result = res.data;
          if (result.success) {
            // 登录成功添加token
            this.$store.commit("updateToken", result.data.token);
            let redirect = decodeURIComponent(
              this.$route.query.redirect || "/"
            );
            this.$router.push({
              path: redirect
            });
          }else{
            alert(result.msg)
          }
        }
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.my_login {
  text-align: center;
  input {
    width: 80%;
    height: 30px;
    display: block;
    margin: 20px auto;
    text-indent: 2em;
  }

}
</style>


