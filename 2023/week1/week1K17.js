// Kata: 8kyu "Grasshopper - Array Mean" https://www.codewars.com/kata/55d277882e139d0b6000005d

// tags: ARRAYS, LISTS, FUNDAMENTALS

// my solution: 

var findAverage = function (nums) {
    return nums.reduce((a, c) => a+c)/ nums.length
  }