 //导入axios
   import axios from "axios";

   const ttreq=axios.create({
    baseURL:'http://toutiao.itheima.net'
   })

   //暴露出去
   export  default ttreq