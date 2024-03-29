/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21


Constraints:

-231 <= x <= 231 - 1
*/

//this solution converts the number to a string, reverses it, and converts back to a number

const reverse = (x) => {

  let isNegative = false;

  if (x < 0 ) {
    isNegative = true;
    x = x * -1;
  }

  while (x % 0 === 0) {
    x = x / 10;
  }

  x = x.toString().split("").reverse().join("");

  if (isNegative) {
    x = "-" + x;
  }

  x = Number(x);

  if ((x > Math.pow(2, 31) - 1) || (x < Math.pow(-2, 31))) {
    x = 0;
  }

  return x;

};

module.exports = reverse