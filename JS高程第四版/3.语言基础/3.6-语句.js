// if语句

// do while
do {
  statement
} while (expression);

// while
while(expression) statement

// for语句
for (initialization; expression; post-loop-expression) statement

// for-in语句
// for-in语句是一种严格的迭代语句，用于枚举对象中的非符号键属性
for (property in expression) statement
for (const propName in window) {
  document.write(propName);
}

// for-of语句
// for-of语句是一种严格的迭代语句，用于遍历可迭代对象的元素
for (property of expression) statement
for (const el of [2,4,6,8]) {
  document.write(el);
}

// 标签语句
label: statement
start: for (let i = 0; i < count; i++) {
  console.log(i);
}

// break和continue语句
let num = 0;

outermost:
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outermost;
    }
    num++;
  }
}

console.log(num); // 55

// with语句
// with语句的用途是将代码作用域设置为特定的对象
with (expression) statement;

let qs = location.search.substring(1);
let hostName = location.hostname;
let url = location.href;
// -->
with(location) {
  let qs = search.substring(1);
  let hostName = hostname;
  let url = href;
}

// switch语句
switch (expression) {
  case value1:
    statement
    break;
  case value2:
    statement
    break;
  case value3:
    statement
    break;
  case value4:
    statement
    break;
  default:
    statement
}