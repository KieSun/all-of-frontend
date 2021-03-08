# 干爆前端

仓库内容分为以下几块：

- 每日更新一道大厂原题，第二天公布答案
- 前端学习路径及包括的各个知识点，每个知识点都有具体文章帮助大家融会贯通
- 前端 15 万字面试资料
- 前端进阶好文

## 每日大厂原题

欢迎大家提供面试题，发送题目至邮箱：zx597813039@gmail.com。

成功采纳后，如果你面试遇到其他问题，笔者可以提供免费解答服务。

## 今日原题

第二题：[以下代码输出什么，为什么？](https://github.com/KieSun/fucking-frontend/issues/2)，这道题目是第一题的进阶版本，更有趣了。

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

第一题：[以下代码输出什么，为什么？](https://github.com/KieSun/fucking-frontend/issues/1)。

```js
try {
    (async function() { a().b().c() })()
} catch (e) {
    console.log(`执行出错：${e.message}`)
}
```

## 前端 15 万字面试资料

[在线阅读](https://yuchengkai.cn/home/)