//import index
const num = require('./index');

var nm = num.streetWa(5,1,40);
var nm2 = num.streetWa2(5,1);

// Printing values modules
console.log(num.numerVer(10,20));
console.log(num.square(17,17));
console.log(nm);

setInterval(function(){
    console.log(nm2);
    nm2++;
},1000);
