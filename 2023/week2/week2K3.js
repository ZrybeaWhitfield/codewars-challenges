// Kata: 8kyu "Invert values" https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad

// tags: LISTS, FUNDAMENTALS, ARRAYS

// my solution:
function invert(array) {
    for(let i =0; i< array.length; i++) {
      array[i] = -(array[i])
    }
     return array;
  }