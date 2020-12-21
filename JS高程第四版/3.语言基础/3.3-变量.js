// 声明变量 var let const
// var
var message = "hi";
message = 100;  // 合法，但不推荐

// var声明作用域
function test() {
  var message = "hi"; // 局部变量
}
test();
console.log(message); // 出错！

function test() { // 不推荐！
  message = "hi";     // 全局变量
}
test();
console.log(message); // "hi"

// 定义多个变量
var message = "hi",
    found = false,
    age = 29;

// var声明提升
function foo() {
  console.log(age);
  var age = 26;
}
foo();  // undefined
// --> 等价于
function foo() {
  var age;
  console.log(age);
  age = 26;
}
foo();  // undefined

// 反复多次使用var声明同一个变量也没有问题
function foo() {
  var age = 16;
  var age = 26;
  var age = 36;
  console.log(age);
}
foo();  // 36

// let声明
// let声明的范围是块作用域，而var声明的范围是函数作用域。
// 适用于var的作用域限制同样也适用于let
if (true) {
  var name = 'Matt';
  console.log(name); // Matt
}
console.log(name);   // Matt
if (true) {
  let age = 26;
  console.log(age);   // 26
}
console.log(age);     // ReferenceError: age没有定义

// let也不允许同一个块作用域中出现冗余声明
var name;
var name;

let age;
let age;  // SyntaxError；标识符age已经声明过了

// 嵌套使用相同的标识符不会报错，而这是因为同一个块中没有重复声明
var name = 'Nicholas';
console.log(name);    // 'Nicholas'
if (true) {
  var name = 'Matt';
  console.log(name);  // 'Matt'
}

let age = 30;
console.log(age);    // 30
if (true) {
  let age = 26;
  console.log(age);  // 26
}

// 声明冗余报错不会因混用let和var而受影响
// 两个关键字声明的并不是不同类型的变量，它们只是指出变量在相关作用域如何存在
var name;
let name; // SyntaxError

let age;
var age; // SyntaxError

// 暂时性死区
// name会被提升
console.log(name); // undefined
var name = 'Matt';

// age不会被提升
console.log(age); // ReferenceError：age没有定义
let age = 26;

// 与var关键字不同，使用let在全局作用域中声明的变量不会成为window对象的属性
var name = 'Matt';
console.log(window.name); // 'Matt'

let age = 26;
console.log(window.age);  // undefined

// for循环中的let声明
for (var i = 0; i < 5; ++i) {
  // 循环逻辑
}
console.log(i); // 5
for (let i = 0; i < 5; ++i) {
  // 循环逻辑
}
console.log(i); // ReferenceError: i没有定义

// const声明
// const的行为与let基本相同，唯一一个重要的区别是用它声明变量时必须同时初始化变量，且尝试修改const声明的变量会导致运行时错误
const age = 26;
age = 36; // TypeError: 给常量赋值
// const也不允许重复声明
const name = 'Matt';
const name = 'Nicholas'; // SyntaxError

// const声明的作用域也是块
const name = 'Matt';
if (true) {
  const name = 'Nicholas';
}
console.log(name); // Matt  

// 如果const变量引用的是一个对象，那么修改这个对象内部的属性并不违反const的限制
const person = {};
person.name = 'Matt'; 