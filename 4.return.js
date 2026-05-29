// without return , we can not access the variable inside of function. 
//so we can say that, whether you console the result inside function, or return it , that you can access it from the outside of the function.)  
function tenTimes(number){
    let result = number * 10;
    return result;
}

let value=tenTimes(10);
console.log(value);

//
function square(input){
    let sq=input*input;
    return sq;
} 
let final=square(5);
console.log(final);


