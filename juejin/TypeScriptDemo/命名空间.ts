// 命名空间声明的关键词是 namespace，只有暴漏出去的类是全局的，其他的不会再生成全局污染，需要暴露出去的类，可以使用export关键词
namespace Home {
  class Header {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'this is header'
      document.body.appendChild(elem)
    }
  }
  class Content {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'this is content'
      document.body.appendChild(elem)
    }
  }
  class Footer {
    constructor() {
      const elem = document.createElement('div')
      elem.innerText = 'this is footer'
      document.body.appendChild(elem)
    }
  }

  export class Page {
    constructor() {
      new Header()
      new Content()
      new Footer()
    }
  }
}