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

**内容每天都在更新，大家可以持续关注。**

## 如何使用

前端学习路径笔者会以计划的方式呈现，从基础到进阶内容都会涉及，并且会附带上笔者的一些解释以便读者们将知识连贯起来，从而建立自己的知识体系而不是单独记忆松散的知识点。

**推荐大家 Star 并 Fork 本项目（点击仓库顶部右上角按钮），然后 `git clone` 到本地后从上至下逐步完成学习计划。**

当然除了前端学习路径，笔者还提供了热门技术原理解析、工程化体系学习、Github 上的优秀资料等内容供大家自行选择，读者们可以挑选感兴趣的内容自行学习。

## 目录

- [前端核心学习路径](#前端核心学习路径)
  - [前端核心三板斧](#前端核心三板斧)
  - [JS](#js)
    - [数据类型](#数据类型)
    - [类型判断](#类型判断)
    - [类型转换](#类型转换)
    - [this](#this)
    - [闭包](#闭包)
    - [作用域](#作用域)
    - [原型](#原型)
    - [new](#new)
    - [变量提升](#变量提升)
    - [Class(类)](#class类)
    - [事件循环](#事件循环)
    - [继承](#继承)
    - [迭代器与生成器](#迭代器与生成器)
    - [节流与防抖](#节流与防抖)
    - [垃圾回收](#垃圾回收)
    - [Promise](#Promise)
  - [HTML](#html)
    - [HTML 语义化](#HTML-语义化)
  - [CSS](#css)
    - [Flex](#flex)
    - [Grid](#grid)
    - [CSS 盒子模型](#CSS-盒子模型)
    - [CSS 选择器](#CSS-选择器)
- [React](#react)
  - [合成事件](#合成事件)
- [Vue](#vue)
- [TypeScript](#TypeScript)
- [组件库](#组件库)
- [性能优化](#性能优化)
- [微前端](#微前端)
- [跨端框架](#跨端框架)
- [面试](#面试)
- [日常充电](#日常充电)
- [Github 优秀学习资料](#github-优秀学习资料)
- [作者信息](#作者信息)

## 如何高效自学

![Z0qdJz](https://yck-1254263422.file.myqcloud.com/uPic/Z0qdJz.png)

这个学习方法笔者百试百灵，学习任何技术都会用上这个思路。另外我们还能通过这个思路拓宽自己的技术栈，将各个知识联系起来建立自己的知识体系，并且通过这种学习方式学到的知识也不容易遗忘。

## 书籍推荐

### 初级

- [JavaScript 高级程序设计（第 4 版）](https://book.douban.com/subject/35175321/)

### 进阶

- [JavaScript 忍者秘籍（第 2 版）](https://book.douban.com/subject/30143702/)
- [你不知道的 JS 三卷](https://book.douban.com/subject/26351021/)，该书英文版是开源的，并且作者已经在写第二版，有能力阅读英文的读者推荐直接看 [原著](https://github.com/getify/You-Dont-Know-JS)
- [CSS 揭秘](https://book.douban.com/subject/26745943/)

### 高级

- [JavaScript 悟道](https://book.douban.com/subject/35469273/)
- [JavaScript 语言精髓与编程实践（第 3 版）](https://book.douban.com/subject/35085910/)

以上书籍主要还是推荐了 JS 方面的，其它比如说框架、TS 等等技术会在各自章节为大家介绍。

## 前端核心学习路径

前端知识点很多这是公认的事情，但是我们确实没必要把所有知识都去学习，那样只会贪多嚼不烂。我们能把核心知识点、热门技术以及工作中需要用到的知识学好就已经能打败大部分前端工程师了，剩下的大家可以自行选择学习内容。

接下来的内容笔者会按照优先级高低来排布学习路径的目录，大家只需从上到下顺序学习即可。

> 为了保证大家学到的知识是正确的，下文中的文档资料笔者都使用了英文版本。因为在审核资料的过程中笔者发现不少中文文档都存在翻译错误或者过时的情况。

### 前端核心三板斧

前端核心三板斧分为三块，分别为 HTML、CSS、JS，其中最重要的当然是 JS 了。

如果你还是一位初学者，推荐先自行完整阅读一至二本书后再按照该计划学习。关于书籍笔者推荐以下两本：

- [JavaScript 高级程序设计（第 4 版）](https://book.douban.com/subject/35175321/)
- [JavaScript 忍者秘籍（第 2 版）](https://book.douban.com/subject/30143702/)

### JS

#### 数据类型

JS 数据类型分为两大类及八种数据类型，注意别漏了 ES6 新增的 `bigint`。

- [ ] 文档：
  - [ ] [JavaScript 数据类型和数据结构](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

#### 类型判断

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

#### 类型转换

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

#### this

`this` 算是不少初学者容易搞混的一个知识点，但是它很重要，务必掌握。

- [ ] 文档
  - [ ] [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [ ] 推荐文章
  - [ ] [You Don't Know JS 书中关于 this 的第一章节](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch1.md)
  - [ ] [You Don't Know JS 书中关于 this 的第二章节](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch2.md)
  - [ ] [深入理解 js this 绑定 ( 无需死记硬背，尾部有总结和面试题解析 )](https://segmentfault.com/a/1190000011194676)

> 务必自己总结规则！

#### 闭包

- [ ] 文档
  - [ ] [闭包](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [ ] 推荐文章
  - [ ] [You Don't Know JS 第二版中对于闭包的解释](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch7.md)，该版本暂无中文翻译，读者可用 [DeepL](https://www.deepl.com/translator) 进行翻译。
  - [ ] [JavaScript 的静态作用域链与“动态”闭包链](https://juejin.cn/post/6957913856488243237)
  - [ ] [知乎中关于闭包的讨论](https://www.zhihu.com/question/34210214)

#### 作用域

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

#### 原型

- [ ] 文档
  - [ ] [原型](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [ ] 推荐文章
  - [ ] [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/this%20%26%20object%20prototypes/ch5.md)
  - [ ] [深入理解 JavaScript 原型](https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg)
  - [ ] [深度解析原型中的各个难点](https://juejin.cn/post/6844903575974313992)
  - [ ] [Prototypes in JavaScript](https://betterprogramming.pub/prototypes-in-javascript-5bba2990e04b) 需自备梯子

#### new

`new` 操作符可以帮助我们构建出一个实例，并且绑定上 `this`。

- [ ] 文档
  - [ ] [new](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
- [ ] 推荐文章
  - [ ] [JS 的 new 到底是干什么的？](https://zhuanlan.zhihu.com/p/23987456)
  - [ ] [JavaScript 深入之 new 的模拟实现](https://github.com/mqyqingfeng/Blog/issues/13)

#### 变量提升

变量提升（Hoisting）可以将变量和函数在编译阶段放入内存，从而在执行阶段时在声明前使用。

- [ ] 文档
  - [ ] [JS 变量提升](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [ ] 推荐文章
  - [ ] [JavsScript 变量提升和函数提升](https://towind.fun/2021/05/10/js-hoisting/)
  - [ ] [我用了两个月的时间才理解 let](https://fangyinghang.com/let-in-js/)
  - [ ] [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

#### Class(类)

`class` 只是原型链的语法糖，与其它语言中的类不是同一样东西。

- [ ] 文档
  - [ ] [Class](https://developer.mozilla.org/en-US/docs/Glossary/Class)
- [ ] 推荐文章
  - [ ] [理解 JavaScript 的类](https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript)
  - [ ] [Babel 是如何编译 Class 上](https://github.com/mqyqingfeng/Blog/issues/105)
  - [ ] [Babel 是如何编译 Class 下](https://github.com/mqyqingfeng/Blog/issues/106)
  - [ ] [给 ES6 class 说句公道话](https://juejin.cn/post/6924108426125508616)
  - [ ] [应该在 JavaScript 中使用 Class 吗？](https://zhuanlan.zhihu.com/p/158956514)

#### 事件循环

大家都知道 JS 是一门单线程的非阻塞的脚本语言。这也就意味着，代码在执行的任何时候只有一个主线程来处理所有的任务。所以弄懂事件循环机制对我们学习 JS 至关重要。

- [ ] 文档
  - [ ] [事件循环](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [ ] 推荐文章
  - [ ] [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872)
  - [ ] [一次弄懂 Event Loop](https://juejin.cn/post/6844903764202094606)
  - [ ] [JavaScript 的工作原理](https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)，需自备梯子，另有 [中文翻译版](https://github.com/Troland/how-javascript-works/blob/master/event-loop.md)。
- [ ] 事件循环可视化
  - [ ] [Loupe](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

#### 继承

继承是面向对象语言（Object-Oriented Language）三大特征之一，在 JS 中也占有非常重要的地位。而想要实现继承有多种方式，它们都有各自的优缺点。

- [ ] 文档
  - [ ] [继承](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- [ ] 推荐文章
  - [ ] [JavaScript 深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)
  - [ ] [JavaScript 中的继承](https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f)，需自备梯子
  - [ ] [JS 类继承](https://javascript.info/class-inheritance)，另有 [中文翻译版](https://zh.javascript.info/class-inheritance)

#### 迭代器与生成器

- [ ] 文档
  - [ ] [迭代器与生成器](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- [ ] 推荐文章
  - [ ] [[译] 什么是 JavaScript 生成器？如何使用生成器？](https://juejin.cn/post/6844903616357072910)
  - [ ] [Understanding Generators in ES6 JavaScript with Examples](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)，需自备梯子
  - [ ] [A Simple Guide to ES6 Iterators in JavaScript with Examples](https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e)，需自备梯子

#### 节流与防抖

节流指连续触发事件的情况下，在某个时间段内，函数只会执行一次。
防抖指在事件被触发一定时间后再执行回调函数，如果在一定时间内该事件又被重复触发，则重启计时。

- [ ] 推荐文章
  - [ ] [函数防抖与函数节流](https://zhuanlan.zhihu.com/p/38313717)
  - [ ] [浅谈 JS 防抖和节流](https://segmentfault.com/a/1190000018428170)
  - [ ] [Debounce – How to Delay a Function in JavaScript](https://www.freecodecamp.org/news/javascript-debounce-example)
  - [ ] [Debouncing and Throttling in JavaScript](https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript)

#### 柯里化（Currying）

柯里化就是将接收多个参数的函数转换成接收一个参数的函数。

- [ ] 推荐文章
  - [ ] [柯里化（Currying）](https://zh.javascript.info/currying-partials)
  - [ ] [JavaScript 专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)
  - [ ] [Understanding Currying in JavaScript](https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339)，需自备梯子，另有 [中文翻译版](https://www.cnblogs.com/GeniusLyzh/p/9937829.html)

#### 垃圾回收

JavaScrip 在变量被创建时分配内存，并在对象不再使用时自动释放内存，这个过程被称为垃圾回收。另外我们主要学习 V8 引擎下的垃圾回收机制。

- [ ] 文档
  - [ ] [内存管理 & 垃圾回收](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
- [ ] 推荐文章
  - [ ] [深入理解 Chrome V8 垃圾回收机制](https://github.com/yacan8/blog/issues/33)，该文章的参考文献也可阅读下
  - [ ] [GC in v8](https://github.com/lrlna/sketchin/blob/master/guides/garbage-collection-in-v8.md)
  - [ ] [JavaScript 工作原理：内存管理 + 处理常见的 4 种内存泄漏](https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec)，另有[中文版](https://juejin.cn/post/6844903519078580238)

### Promise

Promise 是由社区最早提出和实现的异步编程的一种解决方案。

- [ ] 文档
  - [ ] [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - [ ] [Promises/A+ 规范](https://promisesaplus.com/)
- [ ] 推荐文章
- [Callbacks Vs Promises and basics of JS](https://theflyingmantis.medium.com/callbacks-vs-promises-and-basics-of-js-80d3d1515e81)，需自备梯子
- [ ] [最简实现 Promise，支持异步链式调用（20 行）](https://juejin.cn/post/6844904094079926286)
- [ ] [100 行代码实现 Promises/A+ 规范](https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)
- [ ] Github
- [ ] [promise-fun](https://github.com/sindresorhus/promise-fun)

### HTML

#### HTML 语义化

html 语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析。在没有引入样式 CCS 样式的时候也能以一种可以分辨出来大致表示内容的文档格式显示，并且是容易阅读的。 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

- [ ] 文档
  - [ ] [HTML 中的语义](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)
- [ ] 推荐文章
  - [ ] [IFE-NOTE：页面结构语义化](https://rainylog.com/post/ife-note-1/)
  - [ ] [关于 HTML 语义和前端架构](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)

### CSS

#### CSS 盒子模型

在 CSS 中，所有的元素都被一个个的“盒子（box）”包围着，我们广泛地使用两种“盒子” —— 块级盒子 (block box) 和 内联盒子 (inline box)，理解这些“盒子”的基本原理，是我们使用 CSS 实现准确布局、处理元素排列的关键。

- [ ] 文档
  - [ ] [CSS 盒子模型](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [ ] 推荐文章
  - [ ] [CSS 盒模型之内边距、边框、外边距 十九问](https://juejin.cn/post/6880111680153059341)
  - [ ] [CSS Box Model](https://www.w3.org/TR/css-box-3/)
  - [ ] [CSS 盒模型详解（图文教程）](https://www.cnblogs.com/qianguyihao/p/7256371.html)

#### CSS 选择器

CSS 中，选择器用来指定网页上我们想要样式化的 HTML 元素。CSS 选择器提供了很多种方法，所以在选择要样式化的元素时，我们可以做到很精细的地步。

CSS 选择器是 CSS 规则的第一部分。它是元素和其他部分组合起来告诉浏览器哪个 HTML 元素应当是被选为应用规则中的 CSS 属性值的方式。选择器所选择的元素，叫做“选择器的对象”。

- [ ] 文档
  - [ ] [CSS 选择器](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)
- [ ] 推荐文章
  - [ ] [30 个你必须熟记的 CSS 选择器](https://code.tutsplus.com/zh-hans/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
  - [ ] [深入解析 CSS 样式优先级](https://cloud.tencent.com/developer/article/1545341)

#### Flex

- [ ] 文档
  - [ ] [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [ ] 推荐文章
  - [ ] [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - [ ] [Flexbox 布局中不为人知的细节](https://juejin.cn/post/6938292463605907492)

#### grid

- [ ] 文档
  - [ ] [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [ ] 推荐文档
  - [ ] [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - [ ] [最强大的 CSS 布局 —— Grid 布局](https://juejin.cn/post/6854573220306255880)

## React

### 合成事件

合成事件（SyntheticEvent）是 React 模拟原生 DOM 事件所有能力的一个事件对象，即浏览器原生事件的跨浏览器包装器。React 根据 [W3C 规范](https://www.w3.org/TR/DOM-Level-3-Events/) 定义了合成事件。需要注意的是 v16 和 17 版本中的合成事件有差异。

- [ ] 文档
  - [ ] [React 官方文档](https://reactjs.org/docs/events.html)
- [ ] 推荐文章
  - [ ] [探索 React 合成事件](https://segmentfault.com/a/1190000038251163)
  - [ ] [大佬，怎么办？升级 React17，Toast 组件不能用了](https://zhuanlan.zhihu.com/p/380941094)
  - [ ] [What’s the Difference Between Synthetic React Events and JavaScript Events?](https://betterprogramming.pub/whats-the-difference-between-synthetic-react-events-and-javascript-events-ba7dbc742294)，需自备梯子
  - [ ] [React 17 removes event pooling in the modern browsers](https://blog.saeloun.com/2021/04/06/react-17-removes-event-pooling-in-modern-system.html)

### 如何编写一个组件

- [ ] 文档
  - [ ] [React 官方文档](https://reactjs.org/docs/components-and-props.html)
- [ ] 推荐文章
  - [ ] [[译]React 函数组件和类组件的差异](https://jishuin.proginn.com/p/763bfbd4cad4)
  - [ ] [寫 React Components 該注意的 6 個地方與技巧](https://medium.com/@chihsuan/%E5%AF%AB-react-components-%E8%A9%B2%E6%B3%A8%E6%84%8F%E7%9A%846%E5%80%8B%E5%9C%B0%E6%96%B9%E8%88%87%E6%8A%80%E5%B7%A7-faa2bb87a18e)
  - [ ] [编写高效且可读组件的 5 个最佳实践](https://www.infoq.cn/article/ry4icky5crb1pokvi0ql)
  - [ ] [designing-react-components-best-practices](https://www.thisdot.co/blog/designing-react-components-best-practices)

### 受控组件和非受控组件

- 受控组件：在 HTML 中，表单元素（如 input、 textarea 和 select ）通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState() 或者 props 来更新
- 非受控组件：是一个存储其自己的内部状态，并且您使用查询 DOM ref，当你需要它来找到它的当前值，这有点像传统的 HTML

* [ ] 文档
  - [ ] [React 官方文档](https://reactjs.org/docs/uncontrolled-components.html)
* [ ] 推荐文章
  - [ ] [受控和非受控组件真的那么难理解吗](https://juejin.cn/post/6858276396968951822)
  - [ ] [[译]受控组件 & 非受控组件](https://www.baobangdong.cn/controlled-components-and-uncontrolled-components/)

### 原理

- [react-source-code-debug](https://github.com/neroneroffy/react-source-code-debug)，学习如何调试源码
- [react-illustration-series](https://github.com/7kms/react-illustration-series)，图解 react 源码，用大量配图的方式，致力于将 react 原理表述清楚
- [just-react](https://github.com/BetaSu/just-react)，「React 技术揭秘」，一本自顶向下的 React 源码分析书

## Vue

## TypeScript

TypeScript 是为开发大型应用而设计的，并且 TypeScript 可转译成 JavaScript。由于 TypeScript 是 JavaScript 的严格超集，任何现有的 JavaScript 程序都是合法的 TypeScript 程序。

文档

- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)

推荐文章

- [TypeScript 入门教程](https://ts.xcatliu.com/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) 另有[中文版](https://jkchao.github.io/typescript-book-chinese/)

推荐开源项目

- [type-challenges](https://github.com/type-challenges/type-challenges)
- [TypeScript exercises](https://github.com/typescript-exercises/typescript-exercises)

## Electron

Electron 是一个可以使用 Web 技术如 JavaScript、HTML 和 CSS 来创建跨平台原生桌面应用的框架。借助 Electron，我们可以使用纯 JavaScript 来调用丰富的原生 APIs。

文档

- [Electron 官网](https://www.electronjs.org/)
- [Electron 中文教程](https://weishuai.gitbooks.io/electron-/content/)

推荐文章

- [分享这半年的 Electron 应用开发和优化经验](https://juejin.cn/post/6844904029231775758)
- [用 JS 开发跨平台桌面应用，从原理到实践](https://juejin.cn/post/6844903862302670862)
- [Building a desktop application with Electron](https://medium.com/developers-writing/building-a-desktop-application-with-electron-204203eeb658) 需翻墙访问

推荐开源项目

- [Electron 资源](https://github.com/sindresorhus/awesome-electron)
- [Electron Playground](https://github.com/tal-tech/electron-playground)
- [electron-vue-cloud-music](https://github.com/xiaozhu188/electron-vue-cloud-music)
- [electron-builder](https://github.com/electron-userland/electron-builder)

## 组件库

组件库顾名思义指的就是将多个公共模块或者可复用的组件提取整合生成的一个仓库

知名度较广的组件库：

- [antd](https://github.com/ant-design/ant-design.git)
- [elementUI](https://github.com/ElemeFE/element.git)

相关文档：

- [lerna](https://github.com/lerna/lerna)
- [angular commit 规范](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)
- [yarn](https://yarnpkg.com/)
- [css variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

推荐文章：

- [从 0 到 1，搭建一个体系完善的前端 React 组件库](https://www.infoq.cn/article/i4q9ybdmxzmu8eex8qvh)
- [如何规范你的 Git commit？](https://zhuanlan.zhihu.com/p/182553920)
- [基于 lerna 和 yarn workspace 的 monorepo 工作流](https://zhuanlan.zhihu.com/p/71385053)
- [FusionNext 可配置能力从 Sass 体系升级为支持 Css Variable](https://zhuanlan.zhihu.com/p/257159028)

## 性能优化

性能优化与用户体验密切相关，是前端进阶中必不可少的一部分。

推荐文章:

- [前端性能优化之旅](https://github.com/alienzhou/fe-performance-journey)
- [前端性能优化 24 条建议（2020）](https://juejin.cn/post/6892994632968306702)
- [Web Vitals](https://web.dev/learn-web-vitals/)
- [Metrics](https://web.dev/metrics/)
- [Fast load times](https://web.dev/fast/)
- [Front-End Performance Checklist 2021](https://www.smashingmagazine.com/2021/01/front-end-performance-2021-free-pdf-checklist/)

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

## 跨端框架

跨端的最主要的含义就是一套代码多端运行，减少重复劳动

目前看来，国内比较流行的是小程序, H5, App 三端跨的框架， [uniapp](https://github.com/dcloudio/uni-app) 及 [taro](https://github.com/NervJS/taro) 是其中做的比较出彩的两个框架。当然在 taro3.0 之前（以下主要是说小程序），taro 跟 uniapp 都是使用编译时做更多的事情，编译成小程序能够运行的代码。

而在 taro3.0 之后变成了与 [remax](https://github.com/remaxjs/remax) 相同的思想，在运行时做更多的事情，保证了原框架代码能够完全使用，而不需要为了转换成其他小程序时做兼容。

- [awesome-remax](https://github.com/remaxjs/awesome-remax)
- [美团自研 react 跨端](https://tech.meituan.com/2021/06/10/react-native-hybrid-practice-dsl-in-meituan.html)
- [京东 taro](https://juejin.cn/post/6844904036743774216)

## 监控

当业务进入稳定，最需要做的肯定是对于业务线上的各种性能、异常及常规业务进行监控，避免在上线之后成为瞎子。

目前市场比较出名的监控系统：

- [sentry](https://sentry.io/welcome/)
- [ali node](https://www.aliyun.com/product/nodejs)
- [bugly](https://bugly.qq.com/v2/)
- [mixpanel](https://mixpanel.com/)
- [听云](https://www.tingyun.com/)

推荐开源库：

- [rrweb](https://github.com/rrweb-io/rrweb)，提供像素级的录制与回放，帮助正确定位问题是如何发生的

推荐文章：

- [美团可视化埋点方案](https://tech.meituan.com/2019/08/15/mtflexbox-automation-buried-point-exploration.html)
- [如何进行 web 性能监控？](http://www.alloyteam.com/2020/01/14184/#prettyPhoto)
- [蚂蚁金服如何把前端性能监控做到极致?](https://www.infoq.cn/article/dxa8am44oz*lukk5ufhy)
- [如何做前端异常监控？](https://www.zhihu.com/question/29953354)

## 面试

## 日常充电

## Github 优秀学习资料

## 生产力工具

### 流程图

- [whimsical](https://whimsical.com/)

## 作者信息

| 微信扫码关注公众号，订阅更多精彩内容                                                                 | 加笔者微信进群与大厂大佬讨论技术                                                                    |
| ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| <img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/20191220223702.jpeg" width="500px;" /> | <img src="https://yck-1254263422.cos.ap-shanghai.myqcloud.com/20191220224224.png" width="260px;" /> |
