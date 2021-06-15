// Kata: 8kyu "Count of positives / sum of negatives" https://www.codewars.com/kata/576bb71bbbcf0951d5000044

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//
// If the input array is empty or null, return an empty array.
//
// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// tags: FUNDAMENTALS, ARRAYS, LISTS, DATA STRUCTURES, ARITHMETIC, MATHEMATICS, ALGORITHMS, NUMBERS
// my solution:

function countPositivesSumNegatives(input) {
  let posCount = 0
  let negSum = 0
  if (input == null || input.length == 0 ){
    return []
  }
  for(let i = 0; i< input.length; i++){
    if(input[i] > 0){
      posCount += 1
    }else{
      negSum += input[i]
    }
  }
  return [posCount, negSum]
}
