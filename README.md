# 简介

vue-pro-temp 是 vue 的模板项目，该项目默认集成了：

vue
vuex
router
sass
eslint
mock


该项目添加了自动加载：路由，store


该项目添加了生成、删除组件的命令



该项目添加自动部署的功能

该项目公共组件全局注册


```

  默认打包：

  dist\js\chunk-vendors.19ef9041.js    126.08 KiB         43.68 KiB
  dist\js\app.423484b0.js              6.08 KiB           2.28 KiB
  dist\js\about.f8445343.js            0.44 KiB           0.31 KiB  // 路由懒加载
  dist\css\app.877b7338.css            0.42 KiB           0.26 KiB

```
# 1.修改.eslintrc.js的配置


# 2.修改index.html

1.添加进度  2.添加了统一标签的样式normalize.css  3.添加mete标签

# 3.添加vue.config.js

```

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
// https://cli.vuejs.org/zh/config/
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    // 起别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
  }
}

```

# 4.修改router，实现自动加载路由
注意路由的name不能出现重复

路由编写格式：

编写一级路由
```
// 这里暂时没有使用路由懒加载
import Register from './register.vue'
// const Create = () => import(/* webpackChunkName: "create" */ './create.vue')
export default {
  path: '/register',
  name: 'register', // 最好不能出现重复
  pname: '',
  level: 1, // 一级路由
  component: Register,
  children: [
  ]
}

```

编写二级路由
```
// 这里暂时没有使用路由懒加载
import List from './list.vue'
export default {
  path: 'bookslist',
  name: 'bookslist',
  pname: 'main',
  level: 2, // 二级路由
  component: List,
  children: [
  ]
}


```
编写三级路由
```
// 这里暂时没有使用路由懒加载
import Create from './create.vue'
export default {
  path: 'create',
  name: 'create',
  pname: 'goodslist',
  level: 3, // 3级路由
  component: Create,
  children: [
  ]
}
```

附加：此时打包的大小：

```

  File                                     Size             Gzipped  
  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB 
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.ef2c018d.js        37.70 KiB        13.64 KiB
  dist\js\app.dee68bc4.js                  13.11 KiB        2.88 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.38144b40.css                0.15 KiB         0.13 KiB

``` 

# 5.添加axios框架和封装axios请求

1.使用cdn的方式添加axios框架

2.封装了axios的请求

3.添加config的配置

# 6.添加 devServer 实现跨越的功能

直接添加下面的配置，不用安装webpack-dev-server，默认脚手架已经安装了的

```

  devServer: {
    proxy: {
      '/station': {
        target: 'http://172.16.119.213:9090',
        ws: true,
        changeOrigin: true
      }
    }
  }

```

附加：此时打包的大小：

```

  File                                     Size             Gzipped

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.00bc79c9.js        45.15 KiB        16.18 KiB
  dist\js\app.6d8d1580.js                  14.13 KiB        3.33 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.e6e72d52.css                0.15 KiB         0.13 KiB
```

# 7.添加 mockjs 实现后台接口的模拟

1.安装mockjs  
 
  npm install mockjs --save-dev

2.编写mock接口 并在main.js中引入

3.注意不能模拟上传文件，get请求使用正则匹配url


附加：此时打包的大小：
```
  File                                     Size             Gzipped  

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.d3a9f9e8.js        181.28 KiB       65.23 KiB
  dist\js\app.bd520232.js                  14.55 KiB        3.47 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.60167145.css                0.15 KiB         0.13 KiB

```

dist\js\chunk-vendors.d3a9f9e8.js        181.28 KiB       65.23 KiB 

突然变大是因为 mockjs 也打包进去了,解决方案：

```

// 导入mockjs
import { startMock } from '@/config/index.js'
// 必须是测试环境 才打包该 mockjs 库( 下面的代码顺序不能调整,否则会打包就项目里面去 )
process.env.NODE_ENV === 'development' && startMock && require('../../mockjs/index.js')


```

附加：此时打包的大小：

```

  File                                     Size             Gzipped  

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB 
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.00bc79c9.js        45.15 KiB        16.18 KiB
  dist\js\app.5a47ff7c.js                  14.17 KiB        3.33 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.e6e72d52.css                0.15 KiB         0.13 KiB

```

# 8.封装store层

1.编写modules模块（ 里面的目录跟views里面的目录一样 ）

2.编写load-modules.js 自定注册其它模块路由

3.其它模块路由的命名规范是：安装目录结构命名

例如：
login
main_goods
main_books
register


附加：此时打包的大小：

```

  File                                     Size             Gzipped

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.c492ea40.js        51.85 KiB        18.47 KiB
  dist\js\app.3c18f43b.js                  17.11 KiB        3.97 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.e6e72d52.css                0.15 KiB         0.13 KiB

```

# 9.封装service层

编写好了 service 层：

1.service 层的文件夹命名跟views中的一样

2.service 层 默认是给store层调用，也可以直接被组件调用


```

import { httpGet } from '@/http/index.js'

export const login_api = {
  login: '/home1'
}

export default {

  login: (name, password) => {
    return httpGet(login_api.login, { name, password })
  },

  loginout: (name) => {
    console.log(name)
  }

}


```

附加：此时打包的大小：

```
  File                                     Size             Gzipped  

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.418728bf.js        58.38 KiB        20.63 KiB
  dist\js\app.a8f374db.js                  17.93 KiB        4.23 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.60167145.css                0.15 KiB         0.13 KiB

```


# 10.添加 vue-bus 插件

1.编写插件
```

/**
 * 编写一个vue-bus的插件
 * @param {} Vue
 */
const install = function(Vue) {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args)
      },
      on(evnet, callback) {
        this.$on(evnet, callback)
      },
      off(evnet, callback) {
        this.$on(evnet, callback)
      }
    }
  })
  Vue.prototype.$bus = Bus
}
export default install

```

2.注册插件

```
  import Vue from 'vue'
  import VueBus from './vue-bus.js'
  // 1.添加mockjs插件
  import './mockjs.js'
  // 2.添加一个 eventbus 插件
  Vue.use(VueBus)


```
附加：此时打包的大小：
```

  File                                     Size             Gzipped  

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.418728bf.js        58.38 KiB        20.63 KiB
  dist\js\app.c75b2856.js                  18.20 KiB        4.35 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.60167145.css                0.15 KiB         0.13 KiB

```

发现devtools中的vue调试功能不起作用（默认新建项目就可以用的）

因为在开发环境使用cdn的的方法引用了vue 和 vuex 等，应该改成生成环境下才使用cdn
的方式

修改vue.config.js

```

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const isDevelopment = process.env.NODE_ENV === 'development'
// https://cli.vuejs.org/zh/config/
module.exports = {
  productionSourceMap: false, // 仅仅在dev环境使用SourceMap
  lintOnSave: true,
  chainWebpack: (config) => {
    // 起别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@components', resolve('src/components'))
  },
  configureWebpack: (config) => {
    if (isDevelopment) {

    } else {
      // 1.排除哪些库不需要打包 import Vue from 'vue'
      // 用cdn方式引入
      config.externals = {
        vue: 'Vue', // key 是 require 的包名，value 是全局的变量
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        // 'core-js': 'core', // 包好了es6和es7等新的语法，要放在程序的入口处加载
        axios: 'axios'
      }
    }
  },
  // 代理 http
  devServer: {
    proxy: {
      '/station': {
        target: 'http://172.16.119.213:9090',
        ws: true,
        changeOrigin: true
      }
    }
  }
}

```

修改index.html
```

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- 1.首先强制浏览器使用webkit内核（极速内核）,
     如果浏览器没有webkit内核，则按照用户浏览器所支持的最新的ie的trident内核渲染页面（ie兼容内核）,否则按照当前浏览器的标准内核渲染（ie标准内核） -->
    <meta name="renderer" content="webkit|ie-comp|ie-stand">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">
    <!-- http://192.168.45.2:8080/normalize/normalize/css -->
    <link rel="stylesheet" href="<%= BASE_URL %>normalize/normalize.css">
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
      <!-- 在app这个标签覆盖之前显示下面的加载进度 -->
        
    </div>
    <!-- 如果是生成环境，使用cdn导入下面的库 -->
    <% if(process.env.NODE_ENV === 'production'){ %>
    <!-- <script src="/core-js-26/core-js.min.js"></script> -->
    <script src="/vue-26/vue.runtime.min.js"></script>
    <script src="/vuex-31/vuex.min.js"></script>
    <script src="/vue-router-303/vue-router.min.js"></script>
    <script src="/axios-018/axios.min.js"></script>
    <%}%>

    <!-- built files will be auto injected -->
  </body>
</html>



```

# 11. 编写gulp自动部署的脚本

安装开发环境的  "gulp": "4.0.0",
安装开发环境的  "gulp-ssh": "0.7.0",

添加gulpfile.config.js
添加gulpfile.js


# 12.添加了按钮的权限控制 和 utils工具类

permissions
  index.js
  permissions-config.js 

utils

附加：此时打包的大小：

```

  File                                     Size             Gzipped  

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB
  dist\js\chunk-vendors.418728bf.js        58.38 KiB        20.63 KiB
  dist\js\app.95604ffc.js                  18.24 KiB        4.36 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.1b73d7a6.css                0.58 KiB         0.34 KiB

```


# 13.Vue Cli3 项目打包优化

## 1.使用路由懒加载


route.js

```

// 懒加载 路由( 异步组件 )
const Login = () => import(/* webpackChunkName: "login" */ './login.vue')
export default {
  path: '/login',
  name: 'login',
  pname: '', // 父亲路由的名称
  level: 1, // 一级路由
  component: Login,
  children: [
  ]
}


```

load-routes.js

```

const routes = []
// allRoute 是一个函数
const allRoute = require.context('@/views/', true, /route\.(js|ts)$/)
// ["./login/route.js", "./main/goods/list/route.js", "./main/route.js", "./no-find/route.js", "./register/route.js"]
// console.log('allRoute=', allRoute.keys())
allRoute.keys().forEach((file_path, index, array) => {
  const route = allRoute(file_path) // 相当于require('xxxx')
  routes.push(route.default) // router.default 拿到的才是导出的对象，router是模块对象
})
/**
 * routes:[
    {
      path: '/main',
      name: 'main',
      level: 1,
      pname:'',
      component: ()=>Promise.resove({}),
      children: [
      ]
    }
 * ]
 */
export default routes || []

```

附加：此时打包的大小：

```
File                                     Size             Gzipped  

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB 
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB 
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB 

  dist\js\app.72609e0d.js                  69.20 KiB        23.89 KiB
  dist\js\main.250b7115.js                 1.24 KiB         0.60 KiB 
  dist\js\chunk-6930fb1a.dd6c5d07.js       0.57 KiB         0.38 KiB 
  dist\js\chunk-182a5f71.4ac84c11.js       0.56 KiB         0.38 KiB 
  dist\js\chunk-58b92e9c.f1ed18aa.js       0.56 KiB         0.38 KiB 
  dist\js\chunk-6c17baac.60ccd56e.js       0.55 KiB         0.38 KiB 
  dist\js\chunk-0f58772a.a7431789.js       0.44 KiB         0.32 KiB 
  dist\js\chunk-cb9138ee.51a4f94c.js       0.44 KiB         0.32 KiB 
  dist\js\chunk-c98d0ff0.7f32c716.js       0.44 KiB         0.33 KiB
  dist\js\chunk-56638406.3974d94a.js       0.44 KiB         0.32 KiB
  dist\js\register.70b5676f.js             0.43 KiB         0.29 KiB
  dist\js\no-find.ec24ff0e.js              0.42 KiB         0.29 KiB
  dist\js\login.d8fcb38b.js                0.42 KiB         0.29 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.e8da0b44.css                0.58 KiB         0.34 KiB
  dist\css\chunk-6c17baac.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-cb9138ee.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-c98d0ff0.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-182a5f71.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\register.0e433876.css           0.00 KiB         0.02 KiB
  dist\css\chunk-6930fb1a.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\no-find.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\chunk-58b92e9c.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\main.0e433876.css               0.00 KiB         0.02 KiB
  dist\css\chunk-0f58772a.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\login.0e433876.css              0.00 KiB         0.02 KiB
  dist\css\chunk-56638406.0e433876.css     0.00 KiB         0.02 KiB

```


## 2.代码分片

https://juejin.im/post/5e7c83b4e51d455c6c269608

splitChunks 代码拆分：

vue.config.js 的配置如下（不适用cdn引用）
```

  configureWebpack: (config) => {
    if (isDevelopment) {

    } else {
      // 1.排除哪些库不需要打包 import Vue from 'vue'
      // 用cdn方式引入
      config.externals = {
        // vue: 'Vue', // key 是 require 的包名，value 是全局的变量
        // vuex: 'Vuex',
        // 'vue-router': 'VueRouter',
        // // 'core-js': 'core', // 包好了es6和es7等新的语法，要放在程序的入口处加载
        // axios: 'axios'
      }
      // 2.公共代码的抽取
      config.optimization = {
        // https://juejin.im/post/5e7c83b4e51d455c6c269608  代码拆分
        splitChunks: {
          // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
          // chunks: 'all', // 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。
          // minSize: 30000, // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
          // minChunks: 1, // 表示按需加载文件时，并行请求的最大数目。默认为5。
          // maxAsyncRequests: 5, // 表示加载入口文件时，并行请求的最大数目。默认为3。
          // maxInitialRequests: 3, // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
          // automaticNameDelimiter: '~', // 设置chunk的文件名。默认为true。当为true时，splitChunks基于chunk和cacheGroups的key自动命名。

          // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块，就分配到该组。
          // 模块可以被多个组引用，但最终会根据priority来决定打包到哪个组中。
          // 默认将所有来自 node_modules目录的模块打包至vendors组，
          // 将两个以上的chunk所共享的模块打包至default组。
          cacheGroups: {
            vendor: {
              chunks: 'all', // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
              test: /node_modules/,
              name: 'vendor', // 设置chunk的文件名。默认为true。当为true时，splitChunks基于chunk和cacheGroups的key自动命名。
              minChunks: 1, // 表示一个模块至少应被minChunks个chunk所包含才能分割。默认为1。
              maxInitialRequests: 5, // 表示加载入口文件时，并行请求的最大数目。默认为3。
              maxAsyncRequests: 5, // 表示按需加载文件时，并行请求的最大数目。默认为5。
              minSize: 20000, // 表示新分离出的chunk必须大于等于minSize，默认为30000，约30kb。
              automaticNameDelimiter: '~', // 表示拆分出的chunk的名称连接符。默认为~。如chunk~vendors.js
              priority: 100
            },
            common: {
              chunks: 'all',
              test: /[\\/]src[\\/]js[\\/]/,
              name: 'common',
              minChunks: 2, // 将两个以上的chunk所共享的模块打包至common组。
              maxInitialRequests: 5,
              minSize: 20000,
              maxAsyncRequests: 5,
              automaticNameDelimiter: '~',
              priority: 60
            }
            // styles: {
            //   name: 'styles',
            //   test: /\.(sa|sc|c)ss$/,
            //   chunks: 'all',
            //   enforce: true
            // },
            // runtimeChunk: {
            //   name: 'manifest'
            // }
          }
        }
      }
    }
  },

```

附加：此时打包的大小：

```

  File                                     Size             Gzipped  

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB 
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB 
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB 
  // 这个包这么大是因为：chunks: 'initial' 入口中包含非异步加载的库多了，可以使用cdn来减少这种库的打包
  dist\js\vendor.40642981.js               173.71 KiB       59.95 KiB
  dist\js\app.b048d244.js                  11.74 KiB        3.91 KiB 
  dist\js\main.e67cf0ab.js                 1.24 KiB         0.60 KiB 
  dist\js\chunk-6930fb1a.16db2dd4.js       0.57 KiB         0.38 KiB 
  dist\js\chunk-182a5f71.063a84bf.js       0.56 KiB         0.38 KiB 
  dist\js\chunk-58b92e9c.0d00470e.js       0.56 KiB         0.38 KiB 
  dist\js\chunk-6c17baac.ecb94a7a.js       0.55 KiB         0.38 KiB 
  dist\js\chunk-cb9138ee.ad5e82ab.js       0.44 KiB         0.32 KiB 
  dist\js\chunk-c98d0ff0.3dccbd59.js       0.44 KiB         0.33 KiB 
  dist\js\chunk-0f58772a.c526a665.js       0.44 KiB         0.32 KiB 
  dist\js\chunk-56638406.bf9d8b7d.js       0.44 KiB         0.32 KiB
  dist\js\register.6df61983.js             0.43 KiB         0.29 KiB
  dist\js\no-find.2d4ce762.js              0.42 KiB         0.29 KiB
  dist\js\login.3599c90d.js                0.42 KiB         0.29 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.0cd0943b.css                0.58 KiB         0.34 KiB
  dist\css\login.0e433876.css              0.00 KiB         0.02 KiB
  dist\css\chunk-cb9138ee.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-c98d0ff0.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-182a5f71.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-6c17baac.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\no-find.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\register.0e433876.css           0.00 KiB         0.02 KiB
  dist\css\chunk-6930fb1a.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-58b92e9c.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-0f58772a.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\main.0e433876.css               0.00 KiB         0.02 KiB
  dist\css\chunk-56638406.0e433876.css     0.00 KiB         0.02 KiB

```
dist\js\vendor.40642981.js               173.71 KiB       59.95 KiB

这个包这么大是因为：chunks: 'initial' 入口中包含非异步加载的库多了，可以使用cdn来减少这种库的打包。
例如index.js中加载的：vue, vue-router, axios, vuex .... 
  

## 3.使用cdn减少vendor.40642981.js包大小

```

  configureWebpack: (config) => {
    if (isDevelopment) {

    } else {
      // 1.排除哪些库不需要打包 import Vue from 'vue'
      // 用cdn方式引入
      config.externals = {
        vue: 'Vue', // key 是 require 的包名，value 是全局的变量
        vuex: 'Vuex',
        'vue-router': 'VueRouter',
        // 'core-js': 'core', // 包好了es6和es7等新的语法，要放在程序的入口处加载
        axios: 'axios'
      }
   }

```

附加：此时打包的大小：

```

  File                                     Size             Gzipped  

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB 
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB 
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB 

    dist\js\vendor.aa6861b8.js               57.97 KiB        20.34 KiB
    dist\js\app.af50a084.js                  11.91 KiB        3.97 KiB 
  dist\js\main.bfbd4fcd.js                 1.24 KiB         0.60 KiB 
  dist\js\chunk-6930fb1a.31e36961.js       0.57 KiB         0.38 KiB
  dist\js\chunk-182a5f71.16cf518a.js       0.56 KiB         0.38 KiB
  dist\js\chunk-58b92e9c.2644cc1a.js       0.56 KiB         0.38 KiB
  dist\js\chunk-6c17baac.581bd655.js       0.55 KiB         0.38 KiB
  dist\js\chunk-cb9138ee.90dce432.js       0.44 KiB         0.32 KiB
  dist\js\chunk-c98d0ff0.38c08bdd.js       0.44 KiB         0.33 KiB
  dist\js\chunk-0f58772a.53080146.js       0.44 KiB         0.32 KiB
  dist\js\chunk-56638406.7e043990.js       0.44 KiB         0.32 KiB
  dist\js\register.93201715.js             0.43 KiB         0.29 KiB
  dist\js\no-find.50e66738.js              0.42 KiB         0.29 KiB
  dist\js\login.1cb6e8f4.js                0.42 KiB         0.29 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
    dist\css\app.0cd0943b.css                0.58 KiB         0.34 KiB
  dist\css\login.0e433876.css              0.00 KiB         0.02 KiB
  dist\css\chunk-cb9138ee.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-c98d0ff0.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-182a5f71.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-6c17baac.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\no-find.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\register.0e433876.css           0.00 KiB         0.02 KiB
  dist\css\chunk-6930fb1a.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-58b92e9c.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-0f58772a.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\main.0e433876.css               0.00 KiB         0.02 KiB
  dist\css\chunk-56638406.0e433876.css     0.00 KiB         0.02 KiB

```

其中入口文件大小：（ 180k ）
    dist\js\vendor.aa6861b8.js               57.97 KiB        20.34 KiB
    dist\js\app.af50a084.js                  11.91 KiB        3.97 KiB 
    dist\css\app.0cd0943b.css                0.58 KiB         0.34 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB 
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB 
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB 



## 4.使用js和cs的压缩功能

npm i -D uglifyjs-webpack-plugin

"uglifyjs-webpack-plugin": "^2.2.0",

```
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

      // 3.代码压缩  config.plugins 只有在configureWebpack这里才有该函数
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            // 生产环境自动删除console
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        })
      )

```

## 5.对js和cs进行GZIP打包

"compression-webpack-plugin": "^2.0.0",

```

const CompressionPlugin = require('compression-webpack-plugin')

      // 启用GZip压缩 只有在configureWebpack这里才有config.plugins该函数
      const productionGzipExtensions = ['js', 'css']
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp(
            '\\.(' + productionGzipExtensions.join('|') + ')$'
          ),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false // 删除原文件
        })
      )
```


## 6.启用打包分析功能

"webpack-bundle-analyzer": "^3.3.2"

```
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

      // 2.在chainWebpack中启用Analyzer分析打包后的大小
      config
        .plugin('webpack-bundle-analyzer')
        .use(BundleAnalyzerPlugin)

```

最后一旦执行 npm run build 就是启动一个新的分析打包页面


附加：此时打包的大小：
```

Webpack Bundle Analyzer is started at http://127.0.0.1:8888
Use Ctrl+C to close it
  File                                     Size             Gzipped  

  dist\core-js-26\core-js.min.js           116.19 KiB       32.99 KiB
  dist\vue-26\vue.runtime.min.js           63.37 KiB        22.90 KiB
  dist\vue-router-303\vue-router.min.js    23.60 KiB        8.43 KiB 
  dist\axios-018\axios.min.js              12.65 KiB        4.59 KiB 
  dist\vuex-31\vuex.min.js                 11.05 KiB        3.37 KiB 

  // 该文件主要还是core-js比较大，其实也可以使用cdn加载core-js
  dist\js\vendor.5e2a53ce.js               57.48 KiB        20.39 KiB
  dist\js\app.0b9f72ff.js                  11.82 KiB        3.95 KiB 
  dist\js\main.fa7b7a87.js                 1.17 KiB         0.59 KiB 
  dist\js\chunk-6930fb1a.e3f47c5f.js       0.55 KiB         0.38 KiB 
  dist\js\chunk-182a5f71.8d4a1aa8.js       0.55 KiB         0.38 KiB 
  dist\js\chunk-58b92e9c.277ff484.js       0.54 KiB         0.38 KiB 
  dist\js\chunk-6c17baac.7d173482.js       0.53 KiB         0.38 KiB 
  dist\js\chunk-cb9138ee.30d0dcf0.js       0.44 KiB         0.32 KiB
  dist\js\chunk-c98d0ff0.37344ae4.js       0.44 KiB         0.33 KiB
  dist\js\chunk-0f58772a.8e3bd9d1.js       0.44 KiB         0.32 KiB
  dist\js\chunk-56638406.00a8d23a.js       0.43 KiB         0.32 KiB
  dist\js\register.478ebd5d.js             0.42 KiB         0.29 KiB
  dist\js\no-find.3da5011b.js              0.42 KiB         0.29 KiB
  dist\js\login.bcc5680a.js                0.41 KiB         0.29 KiB
  dist\normalize\normalize.css             6.38 KiB         1.79 KiB
  dist\css\app.0cd0943b.css                0.58 KiB         0.34 KiB
  dist\css\login.0e433876.css              0.00 KiB         0.02 KiB
  dist\css\chunk-cb9138ee.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-c98d0ff0.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-182a5f71.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-6c17baac.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\no-find.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\register.0e433876.css           0.00 KiB         0.02 KiB
  dist\css\chunk-6930fb1a.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-58b92e9c.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-cb9138ee.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-c98d0ff0.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-182a5f71.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-6c17baac.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\no-find.0e433876.css            0.00 KiB         0.02 KiB
  dist\css\register.0e433876.css           0.00 KiB         0.02 KiB
  dist\css\chunk-6930fb1a.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-58b92e9c.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\chunk-0f58772a.0e433876.css     0.00 KiB         0.02 KiB
  dist\css\main.0e433876.css               0.00 KiB         0.02 KiB
  dist\css\chunk-56638406.0e433876.css     0.00 KiB         0.02 KiB

```


# 14.编写自动生成页面的脚本指令


# 15.


# 16.


# 17.








### 注意事项

1. 少了全局的网络请求(一些全局使用的接口，需要在项目启动的时候就加载)。

2. 不需要抽象一个公共的对话框（方便自定义每一个对话框样式和对话框表单的验证）。

3. 所有的第三方框架都要不能进行打包到项目中去。

4. 项目的适配要测试 1350px  1600px 1900px 三个版本。

5. 表格打印出现2页是因为使用自动居中导致。

6. 表格要给固定的宽(最小宽) 和 高（ 表格大小：560px - 1000px ），保证沾满A4的80%。

7. 所有页面必须要共用一个混合（方便抽象共性的东西）。

8. 提交的表单，要给表单组件添加锚点，方便后面提交表单定位到校验不通过的一处。

9. 在有表单的地方最好不用使用插入template slot 的技术（如果使用了只能调用api来手动验证表单）。
   template slot中定义了ref 属性，获取到的组件对象不能使用组件对象的方法

10. 界面跳转的时，要记录从哪个界面跳转到哪个界面（方便做页面的缓存）和 控制页面的展示规则。

11. 加入mack来进行模拟后台的接口数据。

12. 每添加一个按钮，需要考虑按钮的权限控制。

13. config 中有关部署的配置文件可以拆分成多个，这样方便后面快速的切换部署环境。

14. 搭建环境的时候可以搭建测试环境 2 套代码（一套测试用，一套后端用，本地自己用）。

15. 可以考虑全局的 notice 提示对话框，不用每次都要单独导入。

16. 公共的组件可以考虑编写成全局组件，通过插件引用 antd-ui 。

17. 可以考虑一套 px 转 rem 的工具（移动端时可以考虑）。

18. 统一文件夹/文件命名规范(默认都是小写:l-advance-edit,l-advance-edit.vue),紧vue文件组件名是首字母大写

19. 代码的命名规范(1.枚举，class User:首字大写。2.变量/方法:驼峰命名。3.常量:全大写。4.css样式类：a-a-a)

20. 注意详情页面：如果详情页面是依靠后端返回的数据来动态渲染的，那如果没有数据的时候应该显示 NoData 页面。

21. 注意要设计：菜单、按钮，列表的权限管理。

22. getter获取的state的数据，不能对state的引用数据进行解构赋值之类操作，不然会导致界面一直在render

23. 菜单组件 最好不用route-link, 使用api进行路由

24. iframe 标签的使用：1.统一门户嵌入子网站 2.<a>标签下载文件，当前iframe接收返回新网页：alert('') 3.打印网页时window.print  4.html导出docx的时候使用iframe（实现把要到处的html片段放到一个新的网页上去导出，定制导出网页样式）

## 可优化点

1. 可优化打包的结果（减少包的体积大小）

2. 可优化 自动注册路由, store, service

3. 可优化公共组件单独导出，自动注册公共组件

4. 可优化减少了重复发送的网络请求(统一获取配置信息)

5. 可优化字体图标最好使用svg

6. 可以使用nodejs实现自动生成/删除：页面组件，路由配置，store层，service层，api层的代码



## 项目难点

编辑日志： 
1.动态添加检察事件(3维数组)，可通过后台配置 
2.表单验证和跳转到锚点 
3.数据量大（初始化显示处理数据，提交处理数据，回显处理数据）
4.

