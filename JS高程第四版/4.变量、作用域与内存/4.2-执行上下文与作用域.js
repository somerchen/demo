// 作用域
var color = "blue";

function changeColor() {
  let anotherColor = "red";

  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;

    // 这里可以访问color、anotherColor和tempColor
  }

  // 这里可以访问color和anotherColor，但访问不到tempColor
  swapColors();
}

// 这里只能访问color
changeColor();

// 作用域链增强
// try/catch语句的catch块
// with语句
function buildUrl() {
  let qs = "?debug=true";

  with(location){
    let url = href + qs;
  }

  return url;
}

// 变量声明
// var let const

// 垃圾回收
// 标记清理 -- 给变量打上一个存在于上下文的标记，当离开上下文的时候也会打上离开上下文的标记，之后会被垃圾回收程序销毁并收回内存空间
// 引用清理 -- 不常用