// Kata: 8kyu "Reversed Words" https://www.codewars.com/kata/51c8991dee245d7ddf00000e
// CComplete the solution so that it reverses all of the words within the string passed in.
//
// Example:
//
// reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

// tags: ALGORITHMS, STRINGS
// my solution:
function reverseWords(str){
  return str.split(" ").reverse().join(" ")
}
