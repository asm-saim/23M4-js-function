//function parameter and argument.

//Square
// 5*5=15
// 10*10 =100
// 6*6=36
//8*8 = 64

//Suppose we need a machine which can give us the square value of the given parameter,
//So that, we can reuse that function if need.

function square(number) {
    let value = number * number;
    console.log(value);
}
square(5);
square(400);
square(1001);

//function er parameter joto gula, call korar somoy toto gulai argument dibe hobe.
function sum(input1, input2)
{
    const total= input1+input2;
    console.log(total);
} 
sum(234,568);

//we can use more than 2 parameters.
function allSum(a,b,c,d,e,f){
    let totalValue=a+b+c+d+e+f;
    console.log(totalValue);
}
allSum(2,3,56,321,3456,67);

//what if we give less argument to the parameter? NaN-> cause 234+undefined = NaN
function multiply(input1, input2){
    const value=input1*input2;
    console.log(value);
} 
multiply(30);

