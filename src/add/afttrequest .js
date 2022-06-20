 //导入axios
   import axios from "axios";
     //create+设置基地址
   const afreq=axios.create({
    baseURL:'https://autumnfish.cn/'
   })

   //暴露出去
   export  default afreq




   