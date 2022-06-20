<template>
  <div class="container">
    <h1>英雄百科</h1>
    <ul>
      <li v-for="it in list" :key="it.heroId">
        <img :src="it.icon" alt="" />
        <p>{{it.name}}</p>
        <!-- 跳转，是个函数 -->
        <button @click="tianzhuan(it.heroId)">跳转</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {herolist} from '@/add/hero'
export default {
  name: 'HeroView',
  data(){
     return {
      list:[]
     }
  },
// 接受函数
  methods:{
     tianzhuan(id){
       this.$router.push({
        path:'/HeroDetail',
        query:{
          id:id
        }
       })
     }
  },
 async created () {
 const res=await herolist()
 console.log('res',res);
 this.list=res.data.data
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 20px;
  text-align: center;
}

h1 {
  text-align: left;
}
.container h2 {
  text-align: center;
  font-size: 30px;
  color: #6a4d52;
}

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
}

input {
  height: 35px;
  width: 400px;
  border-radius: 10px;
  border: 1px solid #e4e7ec;
  padding-left: 10px;
}

ul li img {
  width: 100px;
  height: 100px;
}

ul li p {
  margin: 0;
  padding: 0;
  text-align: center;
}

li {
  transition: 0.5s;
  cursor: pointer;
  margin: 10px;
}

li:hover {
  transform: rotate(10deg) scale(1.1);
}
</style>
