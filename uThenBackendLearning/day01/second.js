console.log("This is another file and these first.js , second.js are called modules");

// IIFA

function sum(a,b){
    console.log(a+b);
}
function sub(a,b){
    console.log(a-b);
}


// module.exports = sum;
module.exports = {sum,sub};