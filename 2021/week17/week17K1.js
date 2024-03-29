// Kata: 7kyu "Exes and Ohs" https://www.codewars.com/kata/55908aad6620c066bc00002a

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:
//
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// tags: FUNDAMENTALS
// my solution:
function XO(str) {
    let ex = 0
    let oh = 0

    for(let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() == "x"){
        ex += 1
      }else if(str[i].toLowerCase() == "o"){
        oh += 1
      }
    }
  return ex === oh
}
