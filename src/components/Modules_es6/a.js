var obj = {a: 1} // 定义变量
var A = 6
function aMethond () { // 定义方法
  obj.a++
  console.log(obj.a)
}
// 定义类
class Person {
  // 定义构造方法
  constructor (name, age) {
    // console.log("父类构造方法")
    this.name = name
    this.age = age
  }

  getInfo () {
    return `姓名：${this.name}, 年龄： ${this.age}`
  }
  setInfo (name, age) {
    this.name = name
    this.age = age
  }
}

export {
  A,
  obj,
  aMethond,
  Person
}
