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

### 今日原题

第三题：[请按照用例实现代码](https://github.com/KieSun/fucking-frontend/issues/3)

```js
// 请使用原生代码实现一个Events模块，可以实现自定义事件的订阅、触发、移除功能
const fn1 = (... args)=>console.log('I want sleep1', ... args)
const fn2 = (... args)=>console.log('I want sleep2', ... args)
const event = new Events();
event.on('sleep', fn1, 1, 2, 3);
event.on('sleep', fn2, 1, 2, 3);
event.fire('sleep', 4, 5, 6);
// I want sleep1 1 2 3 4 5 6
// I want sleep2 1 2 3 4 5 6
event.off('sleep', fn1);
event.once('sleep', () => console.log('I want sleep'));
event.fire('sleep');
// I want sleep2 1 2 3
// I want sleep
event.fire('sleep');
// I want sleep2 1 2 3
```

发现题目有点问题，改动了一下

新建了一个大厂真题每日打卡群，有意愿学习打卡的再进，[打开这个二维码](https://yck-1254263422.cos.ap-shanghai.myqcloud.com/2021/03/09/16152484585655.jpg)。

第二题：[以下代码输出什么，为什么？](https://github.com/KieSun/fucking-frontend/issues/2)，这道题目是第一题的进阶版本，更有趣了。

<details>

```js
try {
    let a = 0
    ;(async function() {
        a += 1
        console.log('inner', a)
        throw new Error('123')
        // a()
    })()
    console.log('outer', a)
} catch(e) {
    console.warn('Error', e)
}
```
[答案](./Answer/1%20~%2010/2.md)

</details>

第一题：[以下代码输出什么，为什么？](https://github.com/KieSun/fucking-frontend/issues/1)

<details>

```js
try {
    (async function() { a().b().c() })()
} catch (e) {
    console.log(`执行出错：${e.message}`)
}
```

[答案](./Answer/1%20~%2010/1.md)

</details>

## 前端十五万字面试资料

[在线阅读](https://yuchengkai.cn/home/)

## 各类大厂内推

数十家公司及岗位，数百个岗位 HC，具体内容查看 [表格](https://bitable.feishu.cn/appdL3vQNYWhT2hGnNRjlC9XoWD)。

另外欢迎有招人需求的朋友提供招聘信息，触达数万前端，内推奖拿到手软。发送招聘信息至邮箱：zx597813039@gmail.com。
