// Kata: 7kyu "Get the integers between two numbers" https://www.codewars.com/kata/598057c8d95a04f33f00004e

// Build a function that can get all the integers between two given numbers.

// Example:
//
// (2,9)
//
// Should give you this output back:
//
// [ 3, 4, 5, 6, 7, 8 ]
//
// If startNum is the same as endNum, return an empty array.
// tags: ALGORITHMS, NUMBERS, INTEGERS
// my solution:

function range(startNum, endNum){
  let arr = []
 for(let i = startNum +1; i < endNum; i++){
   arr.push(i)
}
  return arr
};
