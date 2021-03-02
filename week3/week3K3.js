// Kata: 8kyu "Reversed Strings" https://www.codewars.com/kata/5168bb5dfe9a00b126000018/
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// tags: fundamentals, strings
// my solution:

function solution(str){
  let putMyThangDown = str.split("")
  let flipIt= putMyThangDown.reverse()
  let andReverseIt= flipIt.join("")
  return andReverseIt
}
