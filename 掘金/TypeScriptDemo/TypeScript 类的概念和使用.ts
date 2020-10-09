// 类的基本使用
class Say {
  content = 'hello world'
  say() {
    return this.content
  }
}

const sayHello = new Say()
console.log(sayHello.say())

// 类的继承
class Say2 extends Say {
  say2() {
    return 'say2'
  }
}
const sayHello2 = new Say2()
console.log(sayHello2.say())
console.log(sayHello2.say2())

// 类的重写
class Say3 extends Say {
  say3() {
    return 'say3'
  }
  say() {
    return 'say'
  }
  // super 关键字的使用，代表父类中的方法
  sayBySuper() {
    return super.say() + ' say by super'
  }
}

// 类的类型访问
// public 从英文字面的解释就是公共的或者说是公众的，在程序里的意思就是允许在类的内部和外部被调用.
// private 访问属性的意思是，只允许在类的内部被调用，外部不允许调用
// protected 允许在类内及继承的子类中使用
class Person {
  public name: string
  public sayName() {
    console.log(this.name + ' sayName')
  }

  private name2: string
  public sayName2() {
    console.log(this.name2 + ' syaName2')
  }

  protected name3: string
  public sayName3() {
    console.log(this.name3 + ' sayName3')
  }
}
class Coder extends Person {
  public sayBye() {
    console.log(this.name3) // 不报错
    // console.log(this.name2) // 报错
  }
}
//-------以下属于类的外部--------
const person = new Person()
person.name = 'jspang.com'
// person.name2 = 'name2' // 属性“name2”为私有属性，只能在类“Person”中访问。
person.sayName2()

console.log(person.name)

// 类的构造函数
class Person2 {
  public name: string
  constructor(name: string) {
    this.name = name
  }
}
const person2 = new Person2('jspang')
console.log(person2.name)
// 与上等同，简化写法，更常用
class Person3 {
  constructor(public name: string) {}
}
const person3 = new Person3('jspang3')
console.log(person3.name)

// 类继承中的构造器写法
class Person4 extends Person3 {
  constructor(public age: number) {
    // 使用 super 调用父类的 constructor/构造函数
    // 必须调用 super，若有参数也必须传值
    super('jspang4')
  }
}
const person4 = new Person4(18)
console.log(person4.name)
console.log(person4.age)

// 类的 Getter 和 Setter
class Person5 {
  constructor(private _age: number) {}
  get age() {
    return this._age - 10
  }
  set age(age: number) {
    this._age = age + 3
  }
}
const person5 = new Person5(28)
// set
person5.age = 25
// get
console.log(person5.age)

// 类的 static
// 用static声明的属性和方法，不需要进行声明对象，就可以直接使用
class Person6 {
  static say() {
    return 'hello world'
  }
}
console.log(Person6.say())

// 类的只读属性
class Person7 {
  public readonly name: string
  constructor(name: string) {
    this.name = name
  }
}
const person7 = new Person7('jspang7')
// person7.name = 'hahaha' // 无法分配到 "name" ，因为它是只读属性。

// 抽象类的使用
abstract class Person8 {
  abstract skill()
}
class Person9 extends Person8 {
  skill() {
    console.log('Person9')
  }
}
class Person10 extends Person8 {
  skill() {
    console.log('Person10')
  }
}