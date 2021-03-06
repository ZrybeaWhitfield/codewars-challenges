// Kata: 8kyu "Beginner - Lost Without a Map" https://www.codewars.com/kata/57f781872e3d8ca2a000007e
// Given an array of integers, return a new array with each value doubled.
//
// For example:
//
// [1, 2, 3] --> [2, 4, 6]
//
// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.


// tags: FUNDAMENTALS, ARRAYS, NUMBERS
// my solution:

function maps(x){
  let double = x.map(x => x *2)
  return double;
};
