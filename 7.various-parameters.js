//we also can use string as a parameter.

//Ex: Find the length of the string and show if its even or odd.
function str(name){
    let strLength=name.length;
    console.log(name,strLength);
    if(strLength%2===0)
    {
        console.log('even size');
        return true;
    }
    else{
        console.log('odd size');
        return false;
    }

}
str('dhaka');
str('Eidenburgh');

//Ex:2
function numberBoolean(number, doDouble){
    if(doDouble===true)
    {
        let result1=number* 2;
        return result1;
    }
    else{
        let result2=number* 3;
        return result2;
    }
}
console.log(numberBoolean(10,true));
console.log(numberBoolean(20,false));

//array as a parameter
function numberOfElements(numbers)
{
    let value=numbers.length;
    return value;
}
console.log(numberOfElements([2,33,55,66,86,335,77,2,4,78]))

//object as a parameter 

function callingObject(names){
    let res1=names.name;
    return res1;
}
let endResult=callingObject({name:"Wasi"});
console.log(endResult);