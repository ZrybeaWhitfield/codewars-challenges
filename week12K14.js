// Kata: 8kyu "Fake Binary" https://www.codewars.com/kata/57eae65a4321032ce000002d

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// tags: FUNDAMENTALS, STRINGS, ARRAYS
// my solution:

function fakeBin(x){
x= x.split('')
const newArr = x.map(elem => {
  return elem < 5 ? elem = 0 : elem = 1
})

return newArr.join('')
}
