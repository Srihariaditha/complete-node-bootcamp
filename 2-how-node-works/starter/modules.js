console.log(arguments)
console.log(require('module').wrapper);


//module.exports
const C = require('./test-module-1.js');
const calc = new C();
console.log(calc.add(1,2));
console.log(calc.multiply(1,2));
console.log(calc.divide(1,2));

//exports
const calc2 = require('./test-module-2.js');
console.log(calc2.add(1,2));
console.log(calc2.multiply(1,2));
console.log(calc2.divide(1,2));

const {add, multiply} = require('./test-module-2.js');
console.log(add(1,2));
console.log(multiply(1,2));

//caching
require('./test-module-3.js')()
require('./test-module-3.js')()
require('./test-module-3.js')()
