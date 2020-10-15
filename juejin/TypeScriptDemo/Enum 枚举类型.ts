// 枚举类型是有对应的数字值的，默认是从 0 开始
enum Status {
  MASSAGE,
  SPA,
  DABIAOJIAN,
}
// 从 1 开始
enum Status1 {
  MASSAGE = 1,
  SPA,
  DABIAOJIAN,
}

function getServer(status: any) {
  if (status === Status.MASSAGE) {
    return 'massage'
  } else if (status === Status.SPA) {
    return 'spa'
  } else if (status === Status.DABIAOJIAN) {
    return 'dabiaojian'
  }
}

const result = getServer(Status.DABIAOJIAN)
const result1 = getServer(1)
console.log(`我要去${result}`)