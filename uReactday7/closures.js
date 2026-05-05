
function greet(){
    let a = 10;
    let b = 20;

    function meet(){
        console.log(a);
        console.log(b);
    }

    return meet;
}

//  num ko sirf meet wale ka reference hi nhi milega but meet function jo outer variables ko use kr rha hoga wo unka bhi reference dega num ko

const num = greet();
num();