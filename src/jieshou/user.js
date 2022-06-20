//请求对象

import  ttreq  from '../add/ttrequest'

//抽取请求方法并暴露出去 登录方法
 //按需暴露 可能会有多个接口 import{}

 export function  userlogin(mobile,code){
    return   ttreq({
        url:'/v1_0/authorizations',
        method:'post',
        data:{
            mobile,code
        }
    })
 }