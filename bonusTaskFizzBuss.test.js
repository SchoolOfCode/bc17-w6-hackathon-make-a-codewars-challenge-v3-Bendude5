import { test, expect } from 'vitest';
import { fizzBuzz } from './bonusTaskFizzBuzz';

test('FizzBuzz for numbers 1 to 15', () => {
    expect(fizzBuzz(15)).toEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']);
});

test('FizzBuzz for number 3', () => {
    expect(fizzBuzz(3)).toEqual([1, 2, 'Fizz']);
});

test('FizzBuzz for number 5', () => {
    expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
});

test('FizzBuzz for number 0', () => {
    expect(fizzBuzz(0)).toEqual([]);
});

// Do Not Open, answers!
/*
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    return result;

        //Place outside function
    console.log(fizzBuzz(100));

    //Call in command line: node bonusTaskFizzBuzz.js
*/
