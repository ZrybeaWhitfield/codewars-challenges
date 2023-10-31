// Kata: 7kyu "List Filtering" https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
// tags: LISTS, FILTERING, DATA STRUCTURES, FUNDAMENTALS

// my solution: 

function filter_list(l) {
    return l.filter(element =>typeof element === "number")
  }