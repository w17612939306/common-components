// export { A, aMethond, Person } from './a.js';
// 写成一行以后，A, aMethond, Person实际上并没有被导入当前模块，只是相当于对外转发了这两个接口，导致当前模块不能直接使用aMethond, Person
// console.log(A);//A is not defined    对外转发A，当前模块不能调用
// aMethond();  //aMethond is not defined  对外转发aMethond，当前模块不能调用

// ------------------------------------------------------------------------------------------------------

// 拆分开写，就能在当前模块直接使用 aMethond, Person
import { A, aMethond as dMethod, Person as dPerson } from './a.js'

console.log(A)// 6
// aMethond();  //aMethond is not defined 不能调用，aMethond接口已改名为 dMethod
dMethod() // 3 新接口可以正常调用

export { A, dMethod, dPerson }
