<template>
  <div class="joke">
    <h1>开心一笑</h1>
    <div class="joke-box">
      <div class="item">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum commodi
          tenetur cumque repellendus. Perspiciatis, incidunt totam! Odio laborum
          accusantium, magni aut velit nobis amet? Labore sunt dolores
          consequuntur aliquam doloribus.
        </p>
        <div class="control-box">
          <div class="left">
            <span>😄</span>
            <span>😭</span>
            <span>✉️</span>
          </div>
          <span class="more">...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JokeView'
}
</script>

<style lang="less" scoped>
.joke {
  .input-box {
    display: flex;
    align-items: center;
  }
  h2,
  p {
    text-align: center;
  }

  .input-box input {
    margin-right: 10px;
    height: 25px;
    border-radius: 5px;
    outline: none;
    appearance: none;
    border: 1px solid gray;
    padding-left: 10px;
  }

  .input-box button {
    padding: 6px 15px;
    background-color: skyblue;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  .joke-box {
    margin-top: 30px;
  }

  .item {
    width: 1000px;
    padding: 10px 10px 5px;
    box-shadow: 0 0 10px #ccc;
    background-color: #ccc;
    transition: 0.3s;
    border-radius: 5px;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 30px;
  }

  .item:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px #ccc;
  }

  .control-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .control-box span {
    font-size: 30px;
    cursor: pointer;
    margin-right: 10px;
  }

  .control-box .more {
    display: flex;
    align-items: center;
    color: gray;
    font-size: 40px;
    transform: translateY(-10px);
  }
}
</style>
