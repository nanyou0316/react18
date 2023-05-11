const {createProxyMiddleware} =require('http-proxy-middleware')
module.exports=function(app){
  app.use(
    '/coll',//路径是以/ajax开头的都会走这个代理
    createProxyMiddleware({
      target:'https://www.1905.com',
      changeOrigin: true
    })
  )
  app.use(
    '/ajax',//路径是以/ajax开头的都会走这个代理
    createProxyMiddleware({
      target:'https://i.maoyan.com',
      changeOrigin: true
    })
  )
}