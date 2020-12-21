// Boolean
let booleanObject = new Boolean(true);

// Number
let numberObject = new Number(10);

let num = 10;
console.log(num.toString());   // "10"
console.log(num.toString(2));  // "1010"
console.log(num.toString(8));  // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"
// toFixed()方法返回包含指定小数点位数的数值字符串
console.log(num.toFixed(2)); // "10.00"
// toExponential()，返回以科学记数法（也称为指数记数法）表示的数值字符串
console.log(num.toExponential(1));  // "1.0e+1"

// toPrecision()方法会根据情况返回最合理的输出结果，可能是固定长度，也可能是科学记数法形式。这个方法接收一个参数，表示结果中数字的总位数（不包含指数）
let num = 99;
console.log(num.toPrecision(1)); // "1e+2"
console.log(num.toPrecision(2)); // "99"
console.log(num.toPrecision(3)); // "99.0"

// 不建议直接实例化Number对象
let numberObject = new Number(10);
let numberValue = 10;
console.log(typeof numberObject);             // "object"
console.log(typeof numberValue);              // "number"
console.log(numberObject instanceof Number);  // true
console.log(numberValue instanceof Number);   // false

// Number.isInteger()方法，用于辨别一个数值是否保存为整数
console.log(Number.isInteger(1))    // true
console.log(Number.isInteger(1.0))  // true
console.log(Number.isInteger(1.01)) // false

// String
let stringObject = new String("hello world");

let stringValue = "hello world";
console.log(stringValue.length); // "11"

// charAt()方法返回给定索引位置的字符
let message = "abcde";
console.log(message.charAt(2)); // "c"

// 字符串操作方法
// concat()
let stringValue = "hello ";
let result = stringValue.concat("world");

console.log(result);      // "hello world"
console.log(stringValue); // "hello"

// 从字符串中提取子字符串的方法：slice()、substr()和substring()
// slice(a, b) a-->从a位置开始截取字符串 b-->截取到b位置为止，如省略，则截取到末尾
// substring(a, b) a-->从a位置开始截取字符串 b-->截取到b位置为止，如省略，则截取到末尾
// substr(a, b) a-->从a位置开始截取字符串 b-->截取b个字符，如省略，则截取到末尾
// 如果 a为负数，slice，substr会把a转化成字符串长度值加上a，substring会把a转化成0，他们都会把b转化成0
let stringValue = "hello world";
console.log(stringValue.slice(3));       // "lo world"
console.log(stringValue.substring(3));   // "lo world"
console.log(stringValue.substr(3));      // "lo world"
console.log(stringValue.slice(3, 7));    // "lo w"
console.log(stringValue.substring(3,7)); // "lo w"
console.log(stringValue.substr(3, 7));   // "lo worl"
console.log(stringValue.slice(-3));         // "rld"
console.log(stringValue.substring(-3));     // "hello world"
console.log(stringValue.substr(-3));        // "rld"
console.log(stringValue.slice(3, -4));      // "lo w"
console.log(stringValue.substring(3, -4));  // "hel"
console.log(stringValue.substr(3, -4));     // "" (empty string)

// indexOf()和lastIndexOf()
// indexOf(str, index) 查找字符串str，从索引index开始
let stringValue = "hello world";
console.log(stringValue.indexOf("o"));     // 4
console.log(stringValue.lastIndexOf("o")); // 7

// 字符串包含方法
// startsWith()检查开始于索引0的匹配项，endsWith()检查开始于索引(string.length - substring.length)的匹配项，而includes()检查整个字符串
let message = "foobarbaz";

console.log(message.startsWith("foo"));  // true
console.log(message.startsWith("bar"));  // false

console.log(message.endsWith("baz"));    // true
console.log(message.endsWith("bar"));    // false

console.log(message.includes("bar"));    // true
console.log(message.includes("qux"));    // false

// startsWith()和includes()方法接收可选的第二个参数，表示开始搜索的位置
let message = "foobarbaz";

console.log(message.startsWith("foo"));     // true
console.log(message.startsWith("foo", 1));  // false

console.log(message.includes("bar"));       // true
console.log(message.includes("bar", 4));    // false

// endsWith()方法接收可选的第二个参数，表示应该当作字符串末尾的位置
let message = "foobarbaz";

console.log(message.endsWith("bar"));     // false
console.log(message.endsWith("bar", 6));  // true

// trim()方法
// trimLeft()和trimRight()方法分别用于从字符串开始和末尾清理空格符
let stringValue = "  hello world  ";
let trimmedStringValue = stringValue.trim();
console.log(stringValue);         // "  hello world "
console.log(trimmedStringValue);  // "hello world"

// repeat()方法
let stringValue = "na ";
console.log(stringValue.repeat(16) + "batman");
// na na na na na na na na na na na na na na na na batman

// padStart()和padEnd()方法
// padStart()和padEnd()方法会复制字符串，如果小于指定长度，则在相应一边填充字符，直至满足长度条件。这两个方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格
let stringValue = "foo";

console.log(stringValue.padStart(6));       // "   foo"
console.log(stringValue.padStart(9, "."));  // "......foo"

console.log(stringValue.padEnd(6));         // "foo   "
console.log(stringValue.padEnd(9, "."));    // "foo......"

// 字符串模式匹配方法 match() replace()