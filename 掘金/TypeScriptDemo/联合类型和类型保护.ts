// 联合类型展示
interface Waiter {
  anjiao: boolean;
  say: () => {}
}
interface Teacher {
  anjiao: boolean;
  skill: () => {}
}
function judgeWho(animal: Waiter | Teacher) {
  // animal.say() // 报错

  // 类型保护
  // 类型保护 -- 类型断言
  if (animal.anjiao) {
    (animal as Teacher).skill()
  } else {
    (animal as Waiter).say()
  }
  // 类型保护 -- in语法
  if ('skill' in animal) {
    animal.skill()
  } else {
    animal.say()
  }
}

// 类型保护 -- typeof语法
function add(first: string | number, second: string | number) {
  // return first + second // 报错
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`
  }
  return first + second
}

// 类型保护 -- instanceof 语法
// 如果要作类型保护的是一个对象，这时候就可以使用instanceof语法
class NumberObj {
  count: number;
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
  // return first.count + second.count // 报错
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}