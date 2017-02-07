# vue-ssr-multiple-entry-starter-kit

> 一个多入口（一个ssr页面，多个spa页面）的vue脚手架

## Build Setup（生产环境）

``` bash
# 安装依赖
npm install  

# 或者使用yarn
yarn install

# webpack打包
npm run build

# 启动服务
npm start
```

## Devlopment Setup（开发环境）

```bash
# 安装依赖
npm install

# 启动服务
npm run dev
```
## 目录文件 

```
├─build // webpack 相关配置文件
│
├─dist  // webpack打包后生成文档存放目录
│  
├─src            // 客户端程序目录
│  │
│  ├─api         // api 配置文件
│  │
│  ├─assets      // 静态文件文件夹
│  │  
│  ├─components  //小组件文件
│  │
│  ├─entries     //程序入口文件
│  │
│  ├─pages       //页面组件
│  │
│  ├─router      //路由文件
│  │
│  ├─store       //vuex文件
│  │
│  ├─template    //初始html文件
│  │
│  ├─utils       //实用工具
│  │


```
## 参考资料

[vue-ssr-demo](https://github.com/yyx990803/vue-ssr-demo)

[vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)

[vue-ssr-starter-kit](https://github.com/doabit/vue-ssr-starter-kit)

[vue2-multiple-entry](https://github.com/lincenying/vue2-multiple-entry)

## License

[MIT](http://opensource.org/licenses/MIT)