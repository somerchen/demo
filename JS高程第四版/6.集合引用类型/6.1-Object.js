// 创建Object
// 使用new操作符和Object构造函数
let person = new Object();
person.name = "Nicholas";
person.age = 29;

// 对象字面量（object literal）表示法
let person = {
  name: "Nicholas",
  age: 29
};
// 属性名可以是字符串或数值
let person = {
  "name": "Nicholas",
  "age": 29,
  5: true
};

// 虽然属性一般是通过点语法来存取的，这也是面向对象语言的惯例，但也可以使用中括号来存取属性
console.log(person["name"]); // "Nicholas"
console.log(person.name);    // "Nicholas"
let propertyName = "name";
console.log(person[propertyName]); // "Nicholas"
// 属性名中包含可能会导致语法错误的字符，或者包含关键字/保留字
person["first name"] = "Nicholas";