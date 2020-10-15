// 不会报错
const infoArr = ['chenxibing', '男', 23]
const infoArr2: (string | number)[] = ['chenxibing', '男', 23]
const infoArr3: (string | number)[] = ['chenxibing', 23, '男']

// 元组
const infoArr4: [string, string, number] = ['chenxibing', '男', 23]
const infoCSV: [string, string, number][] = [
  ['chenxibing', '男', 23],
  ['chenxibing', '男', 23],
  ['chenxibing', '男', 23]
]