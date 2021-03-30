// Kata: 8kyu "Remove String Spaces" https://www.codewars.com/kata/56f6919a6b88de18ff000b36

// Simple, remove the spaces from the string, then return the resultant string.

// tags: FUNDAMENTALS, STRINGS, ARRAYS
// my solution:



function noSpace(x){
  return x.replace(/\s+/g,'')
}
