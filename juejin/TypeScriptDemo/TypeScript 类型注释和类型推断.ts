// 类型注解
let count:number
count = 123

// 类型推断
let countInterface = 123

// 一个不用写类型注解的例子
let one = 1
let two = 2
let three = one + two

// 一个需要写类型注解的例子
// function getTotal(one, two) { one, two 为 any
//   return one + two
// }
function getTotal(one: number, two: number) {
  return one + two
}
const total = getTotal(1, 2)