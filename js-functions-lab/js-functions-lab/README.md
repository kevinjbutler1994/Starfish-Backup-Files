![lab-cask](https://i.imgur.com/hGEeDR1.png)

# JavaScript Functions - Lab

## Intro
This lab provides an opportunity to practice defining and coding some real-world functions.

**This lab is a DELIVERABLE**

## Setup and Instructions

1. Fork and clone this repository.
2. In the [solutions.js](/solutions.js) file, complete the excercies and `console.log` each exercise's answer.
3. Be sure to number each function with a comment above it. 
  - For example, here's the first function, our gift to you: 
```js
// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
  
  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// 2.
...

```
4. After completing each exercise, you may comment out that exercise's code to ease completion of subsequent exercises.
5. Before submitting, please uncomment ALL solutions.


## Exercise

Here are the functions:

1. (_completed above_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a [ternary expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) -  the Math.max method is not allowed.

2. Define a function, as a function expression, `maxOfThree` that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.

6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the length of the longest string.

9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.


### Solution Code

[Try not to peek!](https://replit.com/@jim_clark/JS-Functions-Lab#script.js)

## Additional Resources

- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
