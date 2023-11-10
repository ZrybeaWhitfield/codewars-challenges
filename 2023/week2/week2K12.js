// Kata: 8kyu "Array plus array" https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

// tags: FUNDAMENTALS, ARRAYS, DEBUGGING

// my solution:
function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((a,b) => a +b); 
  }