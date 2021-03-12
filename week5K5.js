// Kata: 8kyu "Calculate average" https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
// YWrite a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0


// tags: FUNDAMENTALS, FUNCTIONAL PROGRAMMING, DECLARATIVE PROGRAMMING
// my solution:

function find_average(array) {
  return array.reduce((acc, current)=> acc += current) / array.length
}
