// Kata: 8kyu "The most asked question on CodeWars" https://www.codewars.com/kata/5935ecef7705f9614500002d
// What is the most asked question on CodeWars?

// Can someone explain /*...*/?
//
// You need to write a function detect that will check if a string starts with Can someone explain, case sensitive. Return true if so, false otherwise.
//
// Let's hope you don't write a solution that makes people ask that question at you!
//
//


// tags: FUNDAMENTALS, STRINGS
// my solution:
function detect(comment) {
  let arr = comment.split(" ")
if(arr[0].includes("Can") && arr[1].includes("someone") && arr[2].includes("explain")){
    return true
  }else{
    return false
  }
}
