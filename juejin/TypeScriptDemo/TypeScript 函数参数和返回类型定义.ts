function getTotal2(one: number, two: number): number {
  return one + two
}

// 函数无返回值时定义方法
function sayHello(): void {
  console.log('hello world')
}

// never 返回值类型 （函数永远执行不完）
function errorFunction(): never {
  throw new Error()
  console.log('errorFunction')
}
function forNever(): never {
  while (true) {

  }
  console.log('forNever')
}

// 函数参数为对象(解构)时
function add({ one, two }: { one: number, two: number }): number {
  return one + two
}
const three2 = add({one: 1, two: 2})