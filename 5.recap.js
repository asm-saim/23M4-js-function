function add(num1, num2){
    let sum=num1+num2;
    return sum;
}
let final=add(10,10);
console.log(final);

//OR, we may use direct approach
function add2(num1,num2){
    return num1+num2;
}

let final2=add2(100,100)
console.log(final2);

//
function math(number1,number2){
    let addition= number1+number2;
    let sub=number1-number2;
    let multiply=addition*sub;
    let finalResult= multiply/sub;

    return finalResult;
}

let output=math(20,10);
console.log(output);

