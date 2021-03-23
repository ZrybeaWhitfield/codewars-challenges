// Kata: 7kyu "Descending Order" https://www.codewars.com/kata/5467e4d82edf8bbf40000155
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
//
// Examples:
// Input: 42145 Output: 54421
//
// Input: 145263 Output: 654321
//
// Input: 123456789 Output: 987654321
// //


// tags: FUNDAMENTALS, FUNCTIONS, CONTROL FLOW, BASIC LANGUAGE FEATURES
// my solution:

function descendingOrder(n){

let arr = Array.from(n.toString()).map(Number);

 return parseInt(arr.sort((a, b) => b -a).join(""))


}
