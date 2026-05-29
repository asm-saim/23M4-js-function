//function
//Structure:
function helo(){
    console.log('This is function chapter');
    console.log('We will clear all concepts');
    console.log('we reuse the function');
}
helo();

//function type 2
function machine(){
    let r='North Face'
    console.log(r);
}
machine();

//type 3 give parameters
function sumResult(a,b){
    let r=a+b;
    console.log(a+b);
}
sumResult(20,13);


//return - it is used for the variable inside the function to the outside.
function division(input1, input2){
    let div=input1/input2;
     return div;
}

let result=division(100,10);
console.log(result);

