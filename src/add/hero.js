//导入请求对象
import afttrequest  from '@/add/afttrequest '

//调用请求方法并暴露出去

export function herolist(){
    return   afttrequest({
     url:'/api/lol/search',
     method:'get'
    })
}


export function herodist(id){
    return   afttrequest({
     url:'/api/lol/info',
     method:'get',
     params:{
        id,
     }
    })
}



