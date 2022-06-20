<template>
  <div id="app">
    <nav class="nav">
      <img src="../src/assets/img/left.png" alt="">
     <div class="add">
       <router-link to="/01">首页</router-link>
      <router-link to="/02">热门榜单</router-link>
      <router-link to="/03">常见问题</router-link>
      <router-link to="/04">注册协议</router-link>
      <router-link to="/05">家长监护</router-link>
      <router-link to="/06">隐私政策</router-link>
      <router-link to="/07">联系我们</router-link>
     </div>
     <img src="../src/assets/img/rigth.png" alt="">
    </nav>
    <router-view />
  </div>
</template>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
.nav{
   display: flex;
   .add{
    display: flex;
    flex: 1;
    a{
      flex: 1;
      line-height: 90px;
      text-decoration: none;
      text-align: center;
      font-size: 12px;
      background-color: #ffebb8;
      color: black;
      &.router-link-active{
        background-color: #fff;
       border-bottom:2px solid rgb(255, 0, 0);

       
        
      }
    }
   }
}
</style>
