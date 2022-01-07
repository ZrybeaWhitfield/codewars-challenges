// Kata: 8kyu "Find numbers which are divisible by given number" https://www.codewars.com/kata/55edaba99da3a9c84000003b

// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. /////First argument is an array of numbers and the second is the divisor.

//Example
//divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]

// tags: ALGORITHMS, ARRAYS
// my solution:

function divisibleBy(numbers, divisor){
  return numbers.filter(newArr => newArr % divisor == 0)
}
