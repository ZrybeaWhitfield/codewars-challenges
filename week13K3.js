// Kata: 7kyu "Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages" https://www.codewars.com/kata/5828713ed04efde70e000346

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP) which includes the count of each coding language represented at the meetup.
//
// For example, given the following input array:
//
// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP):
//
// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:
//
// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.



// tags: ALGORITHMS, HIGHER-ORDER FUNCTIONS, FUNCTIONS, CONTROL FLOW, BASIC LANGUAGE FEATURES, FUNDAMENTALS, DATA STRUCTURES, STRINGS, REGULAR EXPRESSIONS, DECLARATIVE PROGRAMMING, ADVANCED LANGUAGE FEATURES, ARRAYS, OBJECTS, FUNCTIONAL PROGRAMMING
// my solution:


function countLanguages(list) {
let hapMap = new Map()

for(let i = 0; i < list.length; i ++){
  let count= 0
  if(hapMap.has(list[i].language)){
    count = hapMap.get(list[i].language)
  }
  hapMap.set(list[i].language, count + 1)

}let obj = Array.from(hapMap).reduce((obj, [key, value]) => (
  Object.assign(obj, { [key]: value })
), {})
return obj
  }
