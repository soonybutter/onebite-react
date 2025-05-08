
/* CJS
const moduleData = require("./math");
console.log(moduleData);
console.log(moduleData.add(1,2));
console.log(moduleData.sub(6,2));


//객체 구조분해 할당 방식
const {add, sub} = require("./math");
console.log(add(1,4));
console.log(sub(7,2));
*/

// ESM
import { add, sub } from "./math.js";
import mul from "./math.js";

console.log(add(1,4));
console.log(sub(1,2));
console.log(mul(5,6));