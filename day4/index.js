let num1 = 431;
let num2 = new Number(431);
console.log(num2);
console.log(typeof num2);
console.log(typeof num1);

let num3 = 231;
let num4 = new Number(231);
let num5 = new Number(231);
//yha num4 object type ka number me convert hojayega fir num3 se compare krke true de rha hai
console.log(num3==num4);//true
//tha dono hai to object type ke but address differnt hai
console.log(num4==num5);//false

let num6 = 231.68;
console.log(num6.toFixed(2));//231.68
// to fixed point ke baad kitni values chahiye uska count dedo 
console.log(num6.toFixed(5));//231.68000
//toPrecision overall kitni values chahiye wo laakr deta hai
console.log(num6.toPrecision(5));//231.68
console.log(num6.toPrecision(2));//2.3e+2 2.3*10kipower2
//toexponential point ke baad kitni digit chahiye baaki exponential me de rha hai 
console.log(num6.toExponential(3));

console.log(num6.toString());
console.log(typeof(num6));
//ye valueOf sirf num6 ki value print kra dega
console.log(num6.valueOf());
