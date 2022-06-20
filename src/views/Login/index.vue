<template>
  <div id="app" class="login-container light">
    <div class="base-box" style="width: 400px; background: rgb(240, 242, 245);">
      <div class="top">
        <ul class="base-tab">
          <li
            @click="active = 'LoginBox'"
            :class="{ active: active === 'LoginBox' }"
          >
            密码登录
          </li>
          <li
            @click="active = 'RegisterBox'"
            :class="{ active: active === 'RegisterBox' }"
          >
            手机号注册
          </li>
          <li @click="active = 'QRBox'" :class="{ active: active === 'QRBox' }">
            扫码登录
          </li>
        </ul>
      </div>
      <div class="main">
        <keep-alive>
          <component :is="active" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import LoginBox from './LoginBox.vue'
import RegisterBox from './RegisterBox.vue'
import QRBox from './QRBox.vue'
export default {
  name: 'LoginView',
  data () {
    return {
      active: 'LoginBox',
     
    }
  },
  components: {
    LoginBox,
    RegisterBox,
    QRBox
  },
}
</script>

<style lang="less">
.login-container {
  height: 100vh;
  text-align: center;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  label {
    width: 52px;
    display: inline-block;
  }
}
</style>
