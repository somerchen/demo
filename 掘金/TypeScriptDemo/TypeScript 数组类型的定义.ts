// 一般数组类型的定义
const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['a', 'b', 'v']
const arr: (string | number)[] = [1, 'a']

// 数组中对象类型的定义
const objectArr: { name: string, age: number }[] = [
  { name: 'name', age: 18 },
  { name: 'name', age: 18 },
]

// 类型别名
type Lady = { name: string, age: number }
const objectArr2: Lady[] = [
  { name: 'name', age: 18 },
  { name: 'name', age: 18 },
]

class Lady2 { 
  name: string; 
  age: number 
}
const objectArr3: Lady2[] = [
  { name: 'name', age: 18 },
  { name: 'name', age: 18 },
]