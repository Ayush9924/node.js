// debuglog()
// deprecate()
// FormData(FormData,[...])
// inherits()
// inspects()


var util=require("util")
var str='my name is %s and id is %d,';
var frmtstr=util.format(str,`ayush`,31869)
console.log(frmtstr);

// to log a message with a timestamp

var util = require(`util`);

// console.log(util.isArray([]));
console.log(Array.isArray([]));

// console.log(util.sArray({price:0}));
console.log(Array.isArray({price:0}));

console.log((new Date())instanceof Date);

console.log(({"":""})instanceof Date);

console.log("")