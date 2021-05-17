// Kata: 8kyu "Filter out the geese" https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.
//
// The geese are any strings in the following array, which is pre-populated in your solution:
//
// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//
// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
//
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


// tags: FUNDAMENTALS, HIGHER-ORDER FUNCTIONS, FUNCTIONS, CONTROL FLOW, BASIC LANGUAGE FEATURES, ARRAYS
// my solution:

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let newBirds = birds.filter(element => !geese.includes(element))
  return newBirds
}
