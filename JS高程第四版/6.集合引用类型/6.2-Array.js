// 使用Array构造函数
let colors = new Array(3);     // 创建一个包含3个元素的数组
let names = new Array("Greg"); // 创建一个只包含一个元素，即字符串"Greg"的数组

// 数组字面量（array literal）表示法
let colors = ["red", "blue", "green"];  // 创建一个包含3个元素的数组
let names = [];                         // 创建一个空数组
let values = [1,2,];                    // 创建一个包含2个元素的数组

// from()用于将类数组结构转换为数组实例，而of()用于将一组参数转换为数组实例
// 字符串会被拆分为单字符数组
console.log(Array.from("Matt")); // ["M", "a", "t", "t"]

// 可以使用from()将集合和映射转换为一个新数组
const m = new Map().set(1, 2)
                   .set(3, 4);
const s = new Set().add(1)
                   .add(2)
                   .add(3)
                   .add(4);

console.log(Array.from(m)); // [[1, 2], [3, 4]]
console.log(Array.from(s)); // [1, 2, 3, 4]

// Array.from()对现有数组执行浅复制
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1);
console.log(a1);        // [1, 2, 3, 4]
alert(a1 === a2); // false

// 可以使用任何可迭代对象
const iter = {
  *[Symbol.iterator] () {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
  }
}
console.log(Array.from(iter)) // [1, 2, 3, 4, 5]

// arguments对象可以被轻松地转换为数组
function getArgsArray() {
  return Array.from(arguments);
}
console.log(getArgsArray(1, 2, 3, 4)); // [1, 2, 3, 4]

// from()也能转换带有必要属性的自定义对象
const arrayLikeObject = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  length: 4
};
console.log(Array.from(arrayLikeObject)); // [1, 2, 3, 4]

// Array.from()还接收第二个可选的映射函数参数。这个函数可以直接增强新数组的值，而无须像调用Array.from().map()那样先创建一个中间数组。
// 还可以接收第三个可选参数，用于指定映射函数中this的值。但这个重写的this值在箭头函数中不适用。
const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1, x => x**2);
const a3 = Array.from(a1, function(x) {return x**this.exponent}, {exponent: 2});
console.log(a2);  // [1, 4, 9, 16]
console.log(a3);  // [1, 4, 9, 16]

// Array.of()可以把一组参数转换为数组
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
console.log(Array.of(undefined));  // [undefined]