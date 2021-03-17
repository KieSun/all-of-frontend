# 干爆前端

仓库内容分为以下几块：

- 每日更新一道大厂原题，第二天公布答案
- 前端学习路径及包括的各个知识点，每个知识点都有具体文章帮助大家融会贯通
- 前端 15 万字面试资料
- 前端进阶好文
- 各类大厂内推

## 目录

- [干爆前端](#干爆前端)
  - [目录](#目录)
  - [每日大厂原题](#每日大厂原题)
    - [今日原题](#今日原题)
  - [前端十五万字面试资料](#前端十五万字面试资料)
  - [各类大厂内推](#各类大厂内推)


## 每日大厂原题

欢迎大家提供面试题，发送题目至邮箱：zx597813039@gmail.com。

成功采纳后，如果你面试遇到其他问题，笔者可以提供免费解答服务。

### 今日原题

第八题：[对一个很长的名字数组，做分片更新名字请求](https://github.com/KieSun/fucking-frontend/issues/13)

```js
/*
 * 对一个很长的名字数组，做分片更新名字请求：
 * 1. 分片里的更新是并行的，执行 changeName
 * 2. 各个分片间是串行的，执行 sleep
 * 这个函数接受三个参数，名字列表、分片数量，每次分片后的等待时间
 * 比如：
 * slicePostTask(['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh'], 2, 2000)
 * // => ['aa', 'bb']
 * waiting 2s
 * // => ['cc', 'dd']
 * waiting 2s
 * // => ['ee', 'ff']
 * waiting 2s
 * // => ['gg', 'hh']
 */

const changeName = (name) => new Promise((resolve, reject) => {
  setTimeout(() => resolve(name), 1000)
})

const sleep = time => new Promise((resolve, reject) => {
  setTimeout(resolve, time)
})

const slicePostTask = async (names, chunkSize, time) => {
  // todo
}
```

第七题：[数据排重](https://github.com/KieSun/fucking-frontend/issues/11)

<details>

```js
const dedup = (data, getKey = () => {} ) => {
  // todo
}
let data = [
  { id: 1, v: 1 },
  { id: 2, v: 2 },
  { id: 1, v: 2 },
];

// 以 id 作为排重 key，执行函数得到结果
// data = [
//   { id: 1, v: 1 },
//   { id: 2, v: 2 },
// ];

let data1 = [
  { id: 1, v: 1, id1: 1 },
  { id: 2, v: 2, id1: 2 },
  { id: 1, v: 2, id1: 1 },
]

// 以 id 和 id1 作为排重 key，执行函数得到结果
// data1 = [
//   { id: 1, v: 1, id1: 1 },
//   { id: 2, v: 2, id1: 2 },
// ];
```

</details>

第六题：[实现一个 chunk 函数](https://github.com/KieSun/fucking-frontend/issues/8)

<details>

```js
/**
 * @param input
 * @param size
 * @returns {Array}
 */
_.chunk(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]

_.chunk(['a', 'b', 'c', 'd'], 5)
// => [['a', 'b', 'c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 0)
// => []
```

</details>

第五题：[Promise.all 错误处理](https://github.com/KieSun/fucking-frontend/issues/6)

<details>

异步请求通过 Promise.all 处理，怎么让其中失败的所有请求重试。

```js
Promise.all([A, B, C, D])
// 4 个请求完成后发现 AD 请求失败了，如果让 AD 请求重试
```

[答案](./Answer/1%20~%2010/5.md)

</details>

第四题：[消息队列](https://github.com/KieSun/fucking-frontend/issues/5)

<details>

页面上有三个按钮，分别为 A、B、C，点击各个按钮都会发送异步请求且互不影响，每次请求回来的数据都为按钮的名字。

请实现当用户依次点击 A、B、C、A、C、B 的时候，最终获取的数据为 ABCACB。

[答案](./Answer/1%20~%2010/4.md)

</details>

第三题：[请按照用例实现代码](https://github.com/KieSun/fucking-frontend/issues/3)

<details>

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

[答案](./Answer/1%20~%2010/3.md)

</details>

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
