# Fucking Frontend

<p align='center'>
  <img alt="Commit" src="https://img.shields.io/github/commit-activity/w/KieSun/fucking-frontend" />
  <img alt="Stars" src="https://img.shields.io/github/stars/KieSun/fucking-frontend" />
  <img alt="Forks" src="https://img.shields.io/github/forks/KieSun/fucking-frontend" />
  <img alt="GitHub" src="https://img.shields.io/github/license/KieSun/fucking-frontend">
  <img src="https://visitor-badge.laobi.icu/badge?page_id=KieSun.fucking-frontend" alt="visitor badge"/>  
</p>

干爆前端。一网打尽前端学习、进阶、面试等各类内容，帮助大家一年内拿到期望的 offer！大家可以关注【[公众号](#个人信息)】获取最新内容或者加我【[微信](#个人信息)】提意见（别忘了点个 Star 咯）。

**本仓库欢迎各位读者提交你认为不错的内容，直接开 PR 或者 Issue 都可。**

## 这是什么？

这是一份笔者从自学前端逐步成长为大厂基架组资深前端开发所沉淀下来的资料，其中包含了前端体系化学习、进阶、面试等内容。

**此资料适用于初中级进阶、高级查漏补缺。**

## 如何使用

前端学习路径笔者会以计划的方式呈现，从基础到进阶内容都会涉及，并且会附带上笔者的一些解释以便读者们将知识连贯起来，从而建立自己的知识体系而不是单独记忆松散的知识点。

**推荐大家 Star 并 Fork 本项目（点击仓库顶部右上角按钮），然后 `git clone` 到本地后从上至下逐步完成学习计划。**

当然除了前端学习路径，笔者还提供了热门技术原理解析、工程化体系学习、Github 上的优秀资料等内容供大家自行选择，读者们可以挑选感兴趣的内容自行学习。

## 目录

- [学习路径](#学习路径)
  - [前端核心知识点](#前端核心知识点)
- [十五万字面试资料](#十五万字面试资料)
- [前端工程化文章](#前端工程化文章)
- [React 原理](#react-原理)
- [前端进阶文章](#前端进阶文章)
- [更多文章](#更多文章)
- [个人信息](#个人信息)

## 学习路径

前端知识点很多这是公认的事情，但是我们确实没必要把所有知识都去学习，那样只会贪多嚼不烂。我们能把核心知识点、热门技术以及工作中需要用到的知识学好就已经能打败大部分前端工程师了，剩下的大家可以自行选择学习内容。

接下来的内容笔者会按照优先级高低来排布学习路径的目录，大家只需从上到下顺序学习即可。

> 为了保证大家学到的知识是正确的，下文中的文档资料笔者都使用了英文版本。因为在审核资料的过程中笔者发现不少中文文档都存在翻译错误或者过时的情况。

## 前端核心知识点

前端核心知识点分为三块，分别为 HTML、CSS、JS，其中最重要的当然是 JS 了。

如果你还是一位初学者，推荐先自行完整阅读一至二本书后再按照该计划学习。关于书籍笔者推荐以下两本：

- [JavaScript 高级程序设计（第 4 版）](https://book.douban.com/subject/35175321/)
- [JavaScript 忍者秘籍（第 2 版）](https://book.douban.com/subject/30143702/)

## JS

### 数据类型

JS 数据类型分为两大类及八种数据类型，注意别漏了 ES6 新增的 `bigint`。

- [ ] 文档：
  - [ ] [JavaScript 数据类型和数据结构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

### 类型判断

类型判断有好几种方式，分别为：

- `typeof`
- `instanceof`
- `Object.prototype.toString`
- `isXXX`，比如 `isArray`

- [ ] 文档
  - [ ] [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
  - [ ] [instanceof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
  - [ ] [Object.prototype.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString#using_tostring_to_detect_object_class)
- [ ] 推荐文章，Issue 也挺重要
  - [ ] [JavaScript 专题之类型判断(上)](https://github.com/mqyqingfeng/Blog/issues/28)
  - [ ] [JavaScript 专题之类型判断(下)](https://github.com/mqyqingfeng/Blog/issues/30)

### 类型转换

类型转换算是 JS 中情况繁杂且容易出错，但是开发中还经常会遇到的知识点。强行全部记忆容易遗忘，推荐记忆及练习开发中的常见情况。

- [ ] 文档
  - [ ] [ES 标准](https://tc39.es/ecma262/#sec-abstract-operations)
    - 标准并不好读，如果读者英文水平欠佳，可以只阅读该小节内的表格内容。
  - [ ] [双等判断](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality)
- [ ] 推荐文章
  - [ ] [You Don't Know JS 书中关于类型转换的一章节](https://github.com/weiqinl/You-Dont-Know-JS-CN/blob/master/types%20%26%20grammar/ch4.md)
  - [ ] [几种基本类型简单的类型转换](https://zh.javascript.info/type-conversions)
  - [ ] [JavaScript 深入之头疼的类型转换(上)](https://github.com/mqyqingfeng/Blog/issues/159)
  - [ ] [JavaScript 深入之头疼的类型转换(下)](https://github.com/mqyqingfeng/Blog/issues/164)

### this

`this` 算是不少初学者容易搞混的一个知识点，但是它很重要，务必掌握。

- [ ] 文档
  - [ ] [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [ ] 推荐文章
  - [ ] [You Don't Know JS 书中关于 this 的第一章节](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch1.md)
  - [ ] [You Don't Know JS 书中关于 this 的第二章节](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md)
  - [ ] [深入理解 js this 绑定 ( 无需死记硬背，尾部有总结和面试题解析 )](https://segmentfault.com/a/1190000011194676)

> 务必自己总结规则！

### 闭包

- [ ] 文档
  - [ ] [闭包](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [ ] 推荐文章
  - [ ] [You Don't Know JS 第二版中对于闭包的解释](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md)，该版本暂无中文翻译，读者可用 [DeepL](https://www.deepl.com/translator) 进行翻译。
  - [ ] [JavaScript 的静态作用域链与“动态”闭包链](https://juejin.cn/post/6957913856488243237)
  - [ ] [知乎中关于闭包的讨论](https://www.zhihu.com/question/34210214)

### 作用域

作用域是指程序中定义变量的区域，该位置决定了变量的生命周期，也就是变量和函数的可访问范围。

- [ ] 文档
  - [ ] [作用域](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
  - [ ] [块作用域](https://developer.mozilla.org/en-US/docs/Glossary/Block/Scripting)
- [ ] 推荐文章
  - [ ] [JavaScript 深入之词法作用域和动态作用域](https://github.com/mqyqingfeng/Blog/issues/3)
  - [ ] [JavaScript 深入之作用域链](https://github.com/mqyqingfeng/Blog/issues/6)
  - [ ] [Variable scope, closure](https://javascript.info/closure)，另有 [中文翻译版](https://zh.javascript.info/closure)
  - [ ] [You Don't Know JS Yet: Scope & Closures](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures)
  - [ ] [The battle between function scope and block scope](https://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/)

### new

`new` 操作符可以帮助我们构建出一个实例，并且绑定上 `this`。

- [ ] 文档
  - [ ] [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [ ] 推荐文章
  - [ ] [JS 的 new 到底是干什么的？](https://zhuanlan.zhihu.com/p/23987456)
  - [ ] [JavaScript 深入之 new 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)

### 变量提升

变量提升（Hoisting）可以将变量和函数在编译阶段放入内存，从而在执行阶段时在声明前使用。

- [ ] 文档
  - [ ] [JS 变量提升](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [ ] 推荐文章
  - [ ] [JavsScript 变量提升和函数提升](https://towind.fun/2021/05/10/js-hoisting/)
  - [ ] [我用了两个月的时间才理解 let](https://fangyinghang.com/let-in-js/)
  - [ ] [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

### CSS盒子模型

在 CSS 中，所有的元素都被一个个的“盒子（box）”包围着，我们广泛地使用两种“盒子” —— 块级盒子 (block box) 和 内联盒子 (inline box)，理解这些“盒子”的基本原理，是我们使用CSS实现准确布局、处理元素排列的关键。

- [ ] 文档
  - [ ] [HTML盒子模型](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [ ] 推荐文章
  - [ ] [CSS盒模型之内边距、边框、外边距 十九问](https://juejin.cn/post/6880111680153059341)
  - [ ] [CSS Box Model](https://www.w3.org/TR/css-box-3/)
  - [ ] [CSS盒模型详解（图文教程）](https://www.cnblogs.com/qianguyihao/p/7256371.html)




变量提升（Hoisting）可以将变量和函数在编译阶段放入内存，从而在执行阶段时在声明前使用。

- [ ] 文档
  - [ ] [JS 变量提升](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [ ] 推荐文章
  - [ ] [JavsScript 变量提升和函数提升](https://towind.fun/2021/05/10/js-hoisting/)
  - [ ] [我用了两个月的时间才理解 let](https://fangyinghang.com/let-in-js/)
  - [ ] [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

### Class(类)

`class` 只是原型链的语法糖，与其它语言中的类不是同一样东西。

- [ ] 文档
  - [ ] [Class](https://developer.mozilla.org/en-US/docs/Glossary/Class)
- [ ] 推荐文章
  - [ ] [理解 JavaScript 的类](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
  - [ ] [Babel 是如何编译 Class 上](https://github.com/mqyqingfeng/Blog/issues/105)
  - [ ] [Babel 是如何编译 Class 下](https://github.com/mqyqingfeng/Blog/issues/106)
  - [ ] [给 ES6 class 说句公道话](https://juejin.cn/post/6924108426125508616)
  - [ ] [应该在 JavaScript 中使用 Class 吗？](https://zhuanlan.zhihu.com/p/158956514)

### 事件循环

大家都知道 JS 是一门单线程的非阻塞的脚本语言。这也就意味着，代码在执行的任何时候只有一个主线程来处理所有的任务。所以弄懂事件循环机制对我们学习 JS 至关重要。

- [ ] 文档
  - [ ] [事件循环](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [ ] 推荐文章
  - [ ] [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872)
  - [ ] [一次弄懂 Event Loop](https://juejin.cn/post/6844903764202094606)
  - [ ] [JavaScript 的工作原理](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)，需自备梯子，另有 [中文翻译版](https://github.com/Troland/how-javascript-works/blob/master/event-loop.md)。
- [ ] 事件循环可视化
  - [ ] [Loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

### 继承

继承是面向对象语言（Object-Oriented Language）三大特征之一，在 JS 中也占有非常重要的地位。而想要实现继承有多种方式，它们都有各自的优缺点。

- [ ] 文档
  - [ ] [继承](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- [ ] 推荐文章
  - [ ] [JavaScript 深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)
  - [ ] [JavaScript 中的继承](https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f)，需自备梯子
  - [ ] [JS 类继承](https://javascript.info/class-inheritance)，另有 [中文翻译版](https://zh.javascript.info/class-inheritance)

## 跨端框架

跨端的最主要的含义就是一套代码多端运行，减少重复劳动

目前看来，国内比较流行的是小程序, H5, App 三端跨的框架， [uniapp](https://github.com/dcloudio/uni-app) 及 [taro](https://github.com/NervJS/taro) 是其中做的比较出彩的两个框架。当然在 taro3.0 之前（以下主要是说小程序），taro 跟 uniapp 都是使用编译时做更多的事情，编译成小程序能够运行的代码。

而在 taro3.0 之后变成了与 [remax](https://github.com/remaxjs/remax) 相同的思想，在运行时做更多的事情，保证了原框架代码能够完全使用，而不需要为了转换成其他小程序时做兼容。

- [awesome-remax](https://github.com/remaxjs/awesome-remax)
- [美团自研 react 跨端](https://tech.meituan.com/2021/06/10/react-native-hybrid-practice-dsl-in-meituan.html)
- [京东 taro](https://juejin.cn/post/6844904036743774216)

## 微前端

是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将单页面前端应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。

优势：

- 代码库更小，更内聚、可维护性更高
- 松耦合、自治的团队可扩展性更好
- 渐进地升级、更新甚至重写部分前端功能成为了可能
- 独立开发部署，缩小变更范围，进而降低相关风险

框架：

- [single-spa](https://single-spa.js.org/)
- [蚂蚁-乾坤](https://github.com/umijs/qiankun)
- [淘系-icestark](https://github.com/ice-lab/icestark)
- [字节-Garfish](https://github.com/modern-js-dev/garfish)
- [京东-micro-app](https://github.com/micro-zoe/micro-app)
- [Bit](https://bit.dev)

推荐文章：

- [从零到一实现企业级微前端框架，保姆级教学](https://juejin.cn/post/7004661323124441102)
- [What Are Micro Frontends?](https://livebook.manning.com/book/micro-frontends-in-action/chapter-1/v-4/)
- [Bifrost 微前端框架及其在美团闪购中的实践](https://tech.meituan.com/2019/12/26/meituan-bifrost.html)
- [每日优鲜供应链前端团队微前端改造](https://juejin.cn/post/6844903943873675271)
- [微前端在美团外卖的实践](https://tech.meituan.com/2020/02/27/meituan-waimai-micro-frontends-practice.html)
- [How We Build Micro Frontends](https://blog.bitsrc.io/how-we-build-micro-front-ends-d3eeeac0acfc)
- [Revolutionizing Micro Frontends with Webpack 5, Module Federation and Bit](https://blog.bitsrc.io/revolutionizing-micro-frontends-with-webpack-5-module-federation-and-bit-99ff81ceb0)

## 十五万字面试资料

[在线阅读](https://yuchengkai.cn/home/)

- [解决 90% 的大厂基础面试题](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247488553&idx=1&sn=62d8a99b5554751221b45b3c411ad325)
- [解决 90% 的大厂前端网络面试题](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247488796&idx=1&sn=dec4fdb3e596ad87b02419f69c174113)

## 前端工程化文章

- [这才是你需要了解的性能优化呀！](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247489161&idx=1&sn=f029ea01370364f49fe61451b2d247ff)
- [绝了，没想到一个 source map 居然涉及到那么多知识盲区](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247488867&idx=1&sn=cac0ae95c560cca820658a8c3af3f8e5)
- [揭秘自动化部署系统的核心原理](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247488166&idx=1&sn=f62669f6c9331c95badbef2815a8d1b5)
- [你知道 monorepo 居然有那么多坑么？](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247488604&idx=1&sn=6ded0f2ddaedb71bd5d12890cf462726)
- [从零打造性能检测库](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247487811&idx=2&sn=40d02e839fb5400c5b82858d422fb738)
- [还在看那些老掉牙的性能优化文章么？这些最新性能指标了解下](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247486142&idx=1&sn=b75b87a109c28cc6c32046d0fb234aab)

## React 原理

[在线阅读](https://github.com/KieSun/react-interpretation)，另外笔者最近也在准备更新这部分内容，有兴趣的读者可以持续关注。

## 前端进阶文章

- [这些 JS 新语法有点东西啊！](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247489249&idx=1&sn=9a3cedafd021afe8ed3ef81bcd0583c2)
- [这个 React 小细节居然很多人都写错了？](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247489054&idx=1&sn=f025d5dfd81656e5cffd7eb598b0954b)
- [反直觉！大部分人并不知道浏览器到底是如何下载资源的](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247488074&idx=1&sn=21dc9b18cf52d875dec5dc38b34900fe)
- [好家伙，这些写 CSS 的新姿势你还不知道？](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247488007&idx=1&sn=8578ba4a4278de3286feeb18535c75a2)
- [这个异步问题你肯定遇到过，但是会解决的并不多](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247487988&idx=1&sn=6b56888236e0cc8b59e7bf63ff882a21)
- [前端前沿观察，Cookie 居然可以这样整了](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247486890&idx=1&sn=3f92d1290e62549731b9d840aed68cc9)
- [Promise 你可能真的还没用明白（续集进阶版）](https://mp.weixin.qq.com/s?__biz=MzUyNDYxNDAyMg==&mid=2247486584&idx=1&sn=26c5d27b34cc98f952715581b8c74027)

## 更多文章

因为笔者文章实在太多，足足已经写了 150 篇+ 原创，更多文章欢迎大家到【[公众号](#个人信息)】里阅读。

## 个人信息

| 微信扫码关注公众号，订阅更多精彩内容                                                                 | 加笔者微信进群与大厂大佬讨论技术                                                                    |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/20191220223702.jpeg" width="500px;" /> | <img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/20191220224224.png" width="260px;" /> |
