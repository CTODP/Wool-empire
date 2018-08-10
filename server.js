const Koa = require('koa')
const sha1 = require('sha1')
const config = {
    wechat: {
        "appID": "wxd11ea9093ec44d9f",
        "appsecret": "f97c4d893d9d27bae63ab8835df67685",
        "token": "412146229246227"
    }
}
//生成服务器示例
const app = new Koa()
//加载认证中间件
//ctx是koa的应用上下文
//next就是串联中间件的钩子函数
app.use(async (ctx, next) => {
    console.log(ctx.query)
    const {signature,timestamp,nonce,echostr
    }=ctx.query
   const token=config.wechat.token
   let str=[token,timestamp,nonce].sort().join('')
   const sha =sha1(str)
   if(sha===signature)
   {
       ctx.body=echostr
   }else{
       ctx.body='wrong'
   }
})
app.listen(9999)
console.log('Listen'+8888)