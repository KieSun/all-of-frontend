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