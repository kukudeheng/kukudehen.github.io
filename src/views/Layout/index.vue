<template>
  <div class="home-view">
    <div class="top">
      <button class="base-button danger" @click="logout">登出</button>
    </div>
    <div class="container">
      <div class="left">
      <router-link to="home">首页</router-link>
       <router-link to="joke">开心一笑</router-link>
       <router-link to="hero">英雄百科</router-link>
        <a href="#">购物车</a>
        <a href="#">路由传参</a>
      </div>
      <div class="main">
       <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { removeToken } from "../../jieshou/token";
export default {
  name: "HomeView",
  methods: {
    logout() {
      let res = confirm("真的要退出吗？芜湖芜湖");
      if (res === true) {
        removeToken();
        this.$router.replace("/login");
      }
    },
  },
};
</script>

<style scoped lang="less">
.home-view {
  height: 100vh;
  padding-top: 50px;
  .top {
    height: 50px;
    background-color: #001529;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 2;
    button {
      float: right;
      margin: 10px;
    }
  }
  .left {
    a {
      display: block;
      text-align: center;
      font-size: 30px;
      text-decoration: none;
      padding: 10px;
      color: #000;
      &:hover {
        background-color: #01579b;
        color: white;
      }
      &.router-link-exact-active {
        background-color: #01579b;
        color: white;
      }
    }
  }
  .container {
    padding-left: 200px;
    .left {
      width: 200px;
      position: fixed;
      left: 0;
      top: 0;
      height: 100vh;
      padding-top: 50px;
      background-color: #fff;
      box-shadow: 2px 0 8px 0 rgb(29 35 41 / 5%);
    }
    .main {
      background-color: #def6ff;
      padding: 20px;
      min-height: calc(100vh - 50px);
    }
  }
}
</style>
