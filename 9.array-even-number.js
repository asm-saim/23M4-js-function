//Return all the even numbers of an array.
let arrayEven=[];
function evenArray(numbers){
    for(let number of numbers)
    {
        if(number%2===0)
        {
            arrayEven.push(number);
        }
    }
    return arrayEven;
}
let nums=[3,56,78,22,33,91,35];
console.log(evenArray(nums));


//sum of the even numbers of an array
let sum=0;
function evenSum(numbers){
    for(let number of numbers)
    {
        if(number%2===0)
        {
            sum=sum+number;
        }
    }
    return sum;
}
let allArrays=[22,55,7,99,33,226,88,23,53]
let fResult=evenSum(allArrays);
console.log(fResult);

