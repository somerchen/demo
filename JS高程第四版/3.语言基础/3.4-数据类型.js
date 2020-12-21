// 简单数据类型，也称为原始类型
// Undefined、Null、Boolean、Number、String和Symbol
// Symbol（符号）是ECMAScript 6新增的

// 复杂数据类型 Object（对象）

// typeof操作符
// "undefined"表示值未定义；
// "boolean"表示值为布尔值；
// "string"表示值为字符串；
// "number"表示值为数值；
// "object"表示值为对象（而不是函数）或null；
// "function"表示值为函数；
// "symbol"表示值为符号。
let message = "some string";
console.log(typeof message);    // "string"
console.log(typeof (message));   // "string"
console.log(typeof 95);         // "number"

// number类型
// parseInt()也接收第二个参数，用于指定底数（进制数）
let num = parseInt("0xAF", 16); // 175
let num1 = parseInt("10", 2);   // 2，按二进制解析
let num2 = parseInt("10", 8);   // 8，按八进制解析
let num3 = parseInt("10", 10);  // 10，按十进制解析
let num4 = parseInt("10", 16);  // 16，按十六进制解析

// string类型
// toString()方法可见于数值、布尔值、对象和字符串值。
// 对数值调用这个方法时，toString()可以接收一个底数参数，即以什么底数来输出数值的字符串表示
let num = 10;
console.log(num.toString());     // "10"
console.log(num.toString(2));    // "1010"
console.log(num.toString(8));    // "12"
console.log(num.toString(10));   // "10"
console.log(num.toString(16));   // "a"

// 模板字面量
let myMultiLineString = 'first line\nsecond line';
let myMultiLineTemplateLiteral = `first line
second line`;

console.log(myMultiLineString);
// first line
// second line"

console.log(myMultiLineTemplateLiteral);
// first line
// second line

console.log(myMultiLineString === myMultiLinetemplateLiteral); // true

// 这个模板字面量在换行符之后有25个空格符
let myTemplateLiteral = `first line
                         second line`;
console.log(myTemplateLiteral.length);  // 47

// 这个模板字面量以一个换行符开头
let secondTemplateLiteral = `
first line
second line`;
console.log(secondTemplateLiteral[0] === '\n'); // true

// 这个模板字面量没有意料之外的字符
let thirdTemplateLiteral = `first line
second line`;
console.log(thirdTemplateLiteral);
// first line
// second line

// 字符串插值
// 字符串插值通过在${}中使用一个JavaScript表达式实现
let value = 5;
let exponent = 'second';
// 以前，字符串插值是这样实现的：
let interpolatedString =
  value + ' to the ' + exponent + ' power is ' + (value * value);

// 现在，可以用模板字面量这样实现：
let interpolatedTemplateLiteral =
  `${value} to the ${exponent} power is ${value * value}`;

console.log(interpolatedString);           // 5 to the second power is 25
console.log(interpolatedTemplateLiteral);  // 5 to the second power is 25

// 在插值表达式中可以调用函数和方法
function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}
console.log(`${capitalize('hello')}, ${capitalize('world')}!`); // Hello, World!

// 模板字面量标签函数
let a = 6;
let b = 9;
function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
  console.log(strings);
  console.log(aValExpression);
  console.log(bValExpression);
  console.log(sumExpression);
  return 'foobar';
}
let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15
console.log(untaggedResult);   // "6 + 9 = 15"
console.log(taggedResult);     // "foobar"

// 对于有n个插值的模板字面量，传给标签函数的表达式参数的个数始终是n，而传给标签函数的第一个参数所包含的字符串个数则始终是n+1
// 如果你想把这些字符串和对表达式求值的结果拼接起来作为默认返回的字符串，可以这样做
let a = 6;
let b = 9;

function zipTag(strings, ...expressions) {
  return strings[0] +
    expressions.map((e, i) => `${e}${strings[i + 1]}`)
      .join('');
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = zipTag`${a} + ${b} = ${a + b}`;

console.log(untaggedResult);  // "6 + 9 = 15"
console.log(taggedResult);    // "6 + 9 = 15"

// Symbol类型
class Foo {
  async *[Symbol.asyncIterator]() {}
}

let f = new Foo();

console.log(f[Symbol.asyncIterator]());
// AsyncGenerator {<suspended>}

class Emitter {
  constructor(max) {
    this.max = max;
    this.asyncIdx = 0;
  }

  async *[Symbol.asyncIterator]() {
    while(this.asyncIdx < this.max) {
      yield new Promise((resolve) => resolve(this.asyncIdx++));
    }
  }
}

async function asyncCount() {
  let emitter = new Emitter(5);

  for await(const x of emitter) {
    console.log(x);
  }
}

asyncCount();
// 0
// 1
// 2
// 3
// 4

// Symbol.hasInstance

// Symbol.isConcatSpreadable

// Symbol.iterator

// Symbol.match
class FooMatcher {
  static [Symbol.match](target) {
    return target.includes('foo');
  }
}

console.log('foobar'.match(FooMatcher)); // true
console.log('barbaz'.match(FooMatcher)); // false

class StringMatcher {
  constructor(str) {
    this.str = str;
  }

  [Symbol.match](target) {
    return target.includes(this.str);
  }
}

console.log('foobar'.match(new StringMatcher('foo'))); // true
console.log('barbaz'.match(new StringMatcher('qux'))); // false

// Symbol.replace

// Symbol.search

// Symbol.species

// Symbol.split

// Symbol.toPrimitive

// Symbol.toStringTag

// Symbol.unscopables

// Object类型

// 每个Object实例都有如下属性和方法。

// constructor：用于创建当前对象的函数。在前面的例子中，这个属性的值就是Object()函数。
// hasOwnProperty(propertyName)：用于判断当前对象实例（不是原型）上是否存在给定的属性。要检查的属性名必须是字符串（如o.hasOwnProperty("name")）或符号。
// isPrototypeOf(object)：用于判断当前对象是否为另一个对象的原型。（第8章将详细介绍原型。）
// propertyIsEnumerable(propertyName)：用于判断给定的属性是否可以使用（本章稍后讨论的）for-in语句枚举。与hasOwnProperty()一样，属性名必须是字符串。
// toLocaleString()：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
// toString()：返回对象的字符串表示。
// valueOf()：返回对象对应的字符串、数值或布尔值表示。通常与toString()的返回值相同。