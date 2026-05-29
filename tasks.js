// Simple function Related Practice Tasks
// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(num1, num2, num3, num4) {
    let total = num1 * num2 * num3 * num4;
    return total;
}
let numbers = multiply(4, 5, 6, 7);
console.log(numbers);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function digit(number){
    if(number%2===0)
    {
        number = number/2;
        return number;
    }
    else{
        number=number*2;
        return number;

    }
}
let num=digit(5);
console.log(num);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number){
    if(number%2===0)
    {
        return 'Even';
    }
    else{
        return 'Odd';
    }
}
let res=odd_even(8);
console.log(res);