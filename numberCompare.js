/**
 * Hello challenger! Your task is to write a function named `numberCompareFunction` which takes in 2 numbers and checks if they are the same
 *
 * Your implementation should handle two numbers which are the same
 *
 * A few examples:
 *    `numberCompareFunction(2, 2) should return true
 *    `numberCompareFunction(2, 3) should return false
 *    `numberCompareFunction("Hello", "HelloAgain") should return false
 */

export const numberCompareFunction = (number1, number2) => {
    if(typeof number1 !== 'number' && typeof number2 !== 'number')
        {
            return "Please enter a valid number!";
        }
    if (number1 === number2){
        return true;
    } else{
        return false;
    }
}

console.log(numberCompareFunction(2, 2));
