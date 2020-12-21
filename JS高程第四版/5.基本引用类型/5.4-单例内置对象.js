// Global
// URL编码方法

// encodeURI()和encodeURIComponent()
let uri = "http://www.wrox.com/illegal value.js#start";

// "http://www.wrox.com/illegal%20value.js#start"
console.log(encodeURI(uri));

// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"
console.log(encodeURIComponent(uri));

// eval()方法
eval("console.log('hi')");
// 上面这行代码的功能与下一行等价：
console.log("hi");

// Math 方法