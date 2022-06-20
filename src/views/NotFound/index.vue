<template>
  <div class="not-found">
    <h2 class="base-title">
      404 Not Found
    </h2>
    <h2 class="base-title">
      对，我就不去，你访问的页面去火星啦
    </h2>
    <h2 class="base-title" style="font-size: 100px;">
      🚀
    </h2>
    <button type="button" class="base-button primary">
      返回首页
    </button>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped lang="less">
.not-found {
  background-color: #c1e9ff;
  text-align: center;
  padding-top: 200px;
  height: 100vh;
  .base-title {
    color: #000;
    font-size: 60px;
  }
  h3 {
    font-size: 100px;
  }
}
</style>
