// Kata: 8kyu "Beginner - Reduce but Grow" https://www.codewars.com/kata/57f780909f7e8e3183000078
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// tags: FUNDAMENTALS, ARRAYS, NUMBERS
// my solution:
function grow(x){
return(x.reduce((a, b) => a*b, 1))
}
