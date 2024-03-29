// Kata: 8kyu "Stringy Strings" https://www.codewars.com/kata/563b74ddd19a3ad462000054

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.
//
// a string with size 6 should return :'101010'.
//
// with size 4 should return : '1010'.
//
// with size 12 should return : '101010101010'.
//
// The size will always be positive and will only use whole numbers.
// tags: ALGORITHMS, STRINGS, BINARY
// my solution:

function stringy(size) {
  const arr = []
  for(let i = 1; i <= size; i++){
    if(i % 2 !== 0){
      arr.push("1")
    }else{
      arr.push("0")
    }
  }return arr.join("")
  }
