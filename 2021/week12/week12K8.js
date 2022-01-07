// Kata: 8kyu "transform an array into a string" https://www.codewars.com/kata/59a602dc57019008d900004e

// A simple kata, my first.
// simply tranform an array into a string, like so:
//
//   transform([4, -56, true, "box"]) => "4-56truebox"
// have fun coding!


// tags: FUNDAMENTALS
// my solution:

function transform(array) {
  let newArr = array.map(elems => String(elems))
  return newArr.join('')
  }
