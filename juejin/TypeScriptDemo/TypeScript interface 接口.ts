interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
  say(): string
}

const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试')
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + '你被淘汰'))
}

const getResume = (girl: Girl) => {
  console.log(girl.name + '年龄是：' + girl.age)
  console.log(girl.name + '胸围是：' + girl.bust)
  girl.waistline && console.log(girl.name + '腰围是：' + girl.waistline)
  girl.sex && console.log(girl.name + '性别是：' + girl.sex)
}

const girl = {
  name: '大脚',
  age: 18,
  bust: 94,
  waistline: 80,
  sex: '女',
  say() {
    return 'string'
  }
}

screenResume(girl)
getResume(girl)

// 接口和类的约束
class XiaoJieJie implements Girl {
  name = 'name'
  age = 18
  bust = 90
  say() {
    return 'string2'
  }
}

// 接口间的继承
interface Teacher extends Girl {
  teach(): string
}

const getResume2 = (girl: Teacher) => {
  console.log(girl.name + '年龄是：' + girl.age)
  console.log(girl.name + '胸围是：' + girl.bust)
  girl.waistline && console.log(girl.name + '腰围是：' + girl.waistline)
  girl.sex && console.log(girl.name + '性别是：' + girl.sex)
}
const teach = Object.assign({}, girl, { teach() { return 'teach' } })
getResume2(teach)