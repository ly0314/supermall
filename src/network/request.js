import axios from 'axios'

export function request(config){

    const instace =axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout:5000,
    })
    instace.interceptors.request.use(config=>{//请求拦截
        return config
    },err=>{
    
    })

    instace.interceptors.response.use(res=>{//响应拦截
        return res.data
    },err=>{
        console.log(err);
    })
    return instace(config)//发送请求
}


