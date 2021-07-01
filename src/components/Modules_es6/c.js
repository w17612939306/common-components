import { obj, aMethond, Person } from './a.js'
import { B as bData } from './b.js'

export { A as aData } from './a.js'

// console.log(A.a);// A is not defined
console.log(bData)// {b: "2"}
aMethond()
console.log(bData)// {b: "2"}

let people = new Person('王麻子', '99')
console.log(people.getInfo())// 姓名：王麻子, 年龄： 99
people.setInfo('王二麻子', 20)
console.log(people.getInfo())// 姓名：王二麻子, 年龄： 20

export {
  // A,
  bData,
  obj,
  aMethond,
  Person
}
export default 42
