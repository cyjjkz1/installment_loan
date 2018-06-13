# installment_loan

> A Vue.js project

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 项目说明
> 分期项目，移动端使用，需要同时嵌入到好近商户和微信公众号。使用vue-cli脚手架搭建，然后从单页面配置修改到多页面配置

### 多页面开发中怎么添加一个页面？
- 第一步，在pages下载新建一个页面的文件夹，名字为页面名字（如home）。
- 第二步，在pages下的test目录拷贝 App.vue、index.html、index.js到新建的页面目录下，修改index.html、index.js名字为页面名字(home.html、home.js)。
- 第三步，在App.vue中添加新页面的标签、业务逻辑和样式。
