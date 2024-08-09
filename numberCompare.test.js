import {test, expect} from 'vitest';
import {numberCompareFunction} from './numberCompare';

test ('Checking numbers are true', () => {
    expect(numberCompareFunction(2, 2)).toBe(true);
})

test ('Checking numbers are false', () => {
    expect(numberCompareFunction(2, 3)).toBe(false);
})

test ('Checking inputs are numbers', () => {
    expect(numberCompareFunction("hello", "helloagain")).toBe("Please enter a valid number!");
})

// Do Not Open, answers!
/*
    if(typeof number1 !== 'number' && typeof number2 !== 'number')
    {
        return "Please enter a valid number!";
    }
if (number1 === number2){
    return true;
} else{
    return false;
}
    //Place outside function
    console.log(numberCompareFunction(2, 2));

    //Call in command line: node numberCompare.js
*/
