# mescake

> Vue.js 的多页面项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

```
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

npm run build 打包后的多页面视图目录结构是，以views文件来装载，递归遍历views下的所有目录，
以每个目录文件的最深层的目录名称打包为最终的.html文件名：如下

打包前的views视图目录结构：
├── views
│ ├── loginaa (打包后是以这个终极目录名称来命名该目录下的.html文件的)
│ │ ├── login.html （不是以这个login来命名的，需留意这里。。。）
│ │ ├── login.js
│ │ ├── login.vue

打包后的views视图目录结构：
├── views
│ ├── loginaa.html （直接以打包前的上一级目录作为该.html文件名了，上一级目录也将被剔除了）

在项目中，路径直接填写以views作为根路径依次填即可，如下：
<a href="/views/loginaa.html">登录</a>
```
