// 基础静态类型
// number string null undefined symbol boolean void never
// const count: number = 918 // 无法重新声明块范围变量“count”。ts(2451) demo2.ts(1, 5): 此处也声明了 "count"。
const count2: number = 918
const name2: string = 'jspang'

// 对象类型
const xiaoJJie: {
  name: string,
  age: number
} = {
  name: '大脚',
  age: 18
}
console.log(xiaoJJie.name)

// 数组类型 
const XiaoJieJies: string[] = ['1号', '2hao']

// 类类型
class Person { }
const dajiao: Person = new Person

// 函数类型
const jianXiaoJieJie: () => string = () => {
  return '大脚'
}