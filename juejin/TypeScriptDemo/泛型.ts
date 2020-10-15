/**
 * 初始泛型概念
 * 泛型的定义使用 <> 进行定义
 */
function join<jspang>(first: jspang, second: jspang) {
  return `${first}${second}`
}
join<string>('jspang', '.com')
join<number>(1, 2)

// 泛型中数组的使用
function myFun<Any>(params: Any[]) {
  return params
}
myFun<string>(['123', '456'])
function myFun2<Any>(params: Array<Any>) {
  return params
}
myFun<number>([1,2,3])

// 多个泛型的定义
function join2<T, P>(first: T, second:P): T {
  return first
}

// 类中泛型
class SelectGirl<T> {
  constructor(private girls: T[]) {}
  getGirl(index: number): T {
    return this.girls[index]
  }
}
const selectGirl = new SelectGirl(['大脚', '刘颖', '小明']) // 这是ts类型推断出来的
// 更好的写法
const selectGirl2 = new SelectGirl <string> (['大脚', '刘颖', '小明'])
console.log(selectGirl.getGirl(1))

// 泛型中的继承
interface Girl {
  name: string
}
class SelectGirl3<T extends Girl> {
  constructor(private girls: T[]) {}
  getGirl(index: number): string {
    return this.girls[index].name
  }
}
const selectGirl3 = new SelectGirl([
  { name: "大脚" },
  { name: "刘英" },
  { name: "晓红" },
]);
console.log(selectGirl.getGirl(1));

// 泛型约束
// 只能是number 或者 string 类型
class SelectGirl4<T extends number | string> {
  constructor(private girls: T[]) {}
}