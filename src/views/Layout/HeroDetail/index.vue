<template>
  <div class="bg">
    <div class="left">
      <div>
        <img
          class="icon"
          :src="hero.icon"
          alt=""
        />
      </div>
      <span class="title">{{hero.name}}-{{hero.title}}</span>
      <p class="story">
        {{hero.shortBio}}
      </p>
    </div>
    <!-- 背景 -->
    <img
      class="cover"
      :src="bg"
      alt=""
    />
    <!--  -->
  </div>
</template>

<script>
import { herodist } from '@/add/hero'
export default {
  name: 'HeroDetailView',
  data(){
    return {
      hero:{},
      bg:''
    }
  },
  async created() {
    // console.log( this.$route.query);
    const id = this.$route.query.id
    const res = await herodist(id)
    console.log('res', res)
    this.hero=res.data.data.hero
    this.bg=res.data.data.skins[2].mainImg
  }
}
</script>

<style scoped lang="less">
body {
  background-color: black;
  text-align: center;
}

.hero {
  padding: 10px;
  font-size: 25px;
  border-radius: 10px;
  outline: none;
}

.bg {
  width: 1380px;
  height: 700px;
  margin: 10px auto;
  display: flex;
  align-items: center;
}

.bg .left {
  /* height: 590px; */
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5);
  padding-left: 20px;
  padding-top: 30px;
  box-sizing: border-box;
  overflow-y: auto;
}

.left span {
  color: white;
}

.left .name {
  margin-top: 30px;
  font-size: 30px;
}

.left .icon {
  width: 150px;
}

.left .title {
  margin-top: 20px;
  font-size: 50px;
  display: block;
  font-weight: 900;
}

.left .story {
  font-weight: 700;
  color: skyblue;
  text-align: left;
}

.left > div > p {
  width: 150px;
  height: 40px;
  background-color: green;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 1px 1px 1px;
  margin: 10px auto;
  text-align: center;
  line-height: 40px;
}

.left > div > p:hover {
  background-color: greenyellow;
}

.cover {
  width: 980px;
  height: 600px;
}
</style>
