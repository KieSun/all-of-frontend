# 干爆前端

仓库内容分为以下几块：

- 每日更新一道大厂原题，第二天公布答案
- 前端学习路径及包括的各个知识点，每个知识点都有具体文章帮助大家融会贯通
- 前端 15 万字面试资料
- 前端进阶好文
- 各类大厂内推

## 目录

- [每日大厂原题](#每日大厂原题)
- [前端十五万字面试资料](#前端十五万字面试资料)
- [各类大厂内推](#各类大厂内推)


## 每日大厂原题

欢迎大家提供面试题，发送题目至邮箱：zx597813039@gmail.com。

成功采纳后，如果你面试遇到其他问题，笔者可以提供免费解答服务。

### 变量提升&变量提升

> 变量提升（Hoisting）被认为是， Javascript中执行上下文 （特别是创建和执行阶段）工作方式的一种认识。例如，从概念的字面意义上说，“变量提升”意味着变量和函数的声明会在物理层面移动到代码的最前面，但这么说并不准确。实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中。

为什么会出现变量提升？ 因为JavaScript在运行的时候会有 编译和和执行两个过程，在它编译的时候，会对全局进行搜索，所有的变量和函数声明会被移至其作用域的顶部，而其它的语句不会改变它们的顺序，所以在编译阶段，先执行了变量的声明。

我们声明一个函数的时候如果在声明函数的前面调用这个函数也是可以执行的，因为这个函数在解析的时候函数声明会被移至其作用域的顶部 。函数提升只提升函数声明，不会提升函数表达式。
```js
// 普通函数声明
console.log(Gangster("yck")) // yck undefined
function Gangster(name) {
    console.log(name);
}
```
```js
// 声明式函数
console.log(Gangster("yck")) // Gangster is not a function
var Gangster = function (name) {
  console.log(name);
}
```
在变量赋值前，函数声明依旧是函数声明,当变量赋值后，函数声明被会被相同名字的变量覆盖，所以说函数提升的优先级大于变量提升
```js
function Gangster(){
    console.log("大佬");
};
console.log(Gangster);   // Function: Gangster
Gangster(); // 大佬
var Gangster = "我是变量的值";  
console.log(Gangster);  // 我是变量的值
```

- [ ] 文档
  - [ ] [JS 变量提升](https://developer.mozilla.org/zh-CN/docs/Glossary/Hoisting)
- [ ] 推荐文章
  - [ ] [JavsScript 变量提升和函数提升](https://towind.fun/2021/05/10/js-hoisting/)
  - [ ] [JavaScript的执行上下文](https://www.huaweicloud.com/articles/b0e28ae85a6f6d4e4e28824a94d17b51.html)
  - [ ] [JavaScript Scoping and Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

> 务必自己总结规则！

## 前端十五万字面试资料

[在线阅读](https://yuchengkai.cn/home/)

## 各类大厂内推

数十家公司及岗位，数百个岗位 HC，具体内容查看 [表格](https://bitable.feishu.cn/appdL3vQNYWhT2hGnNRjlC9XoWD)。

另外欢迎有招人需求的朋友提供招聘信息，触达数万前端，内推奖拿到手软。发送招聘信息至邮箱：zx597813039@gmail.com。
