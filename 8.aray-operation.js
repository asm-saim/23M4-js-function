let sum = 0
function arraySum(number) {
    for (let num of number) {
        sum = sum + num;
    }
    return sum;
}
let numbers = [10, 20, 30]
let totalArraySum=arraySum(numbers);
console.log(totalArraySum);