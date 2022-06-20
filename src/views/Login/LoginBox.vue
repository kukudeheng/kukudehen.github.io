<template>
  <div>
    <div>
      <label>手机号:</label>
      <div class="base-input">
        <input type="text" v-model.trim="mobile" />
      </div>
    </div>
    <div>
      <label>密码:</label>
      <div class="base-input">
        <input type="password" v-model.trim="password" />
      </div>
    </div>
    <div class="bottom-box">
      <button type="button" class="base-button success" @click="login">
        登录</button
      ><button type="button" class="base-button primary">注册</button>
    </div>
  </div>
</template>

<script>
import router from "../../router/index";
import { userlogin } from "../../jieshou/user";
import {setToken} from  '../../jieshou/token'
export default {
  name: "LoginBox",
  data() {
    return {
      mobile: "16637046798",
      password: "246810",
    };
  },
  methods: {
    async login() {
      try {
        //调用接口来写
        const res = await userlogin(this.mobile, this.password);
        alert("登录成功");
        console.log(res);
        //保存服务器返回的token
        // localStorage.setItem("token", res.data.data.token);
        setToken(res.data.data.token);
        this.$router.push("/");
      } catch (error) {
        //错误提示  
        alert(error.response.data.message);
      }
    },
  },
};
</script>

<style></style>
