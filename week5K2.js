// Kata: 8kyu "Square(n) Sum" https://www.codewars.com/kata/515e271a311df0350d00000f
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


// tags: FUNDAMENTALS, ARITHMETIC, MATHEMATICS, ALGORITHMS, NUMBERS, ARRAYS, LISTS, DATA STRUCTURES
// my solution:

function squareSum(numbers){
let squared = numbers.map(value => Math.pow(value,2))
 return squared == "" ? 0 : squared.reduce((acc, current) => acc+=current)

}
