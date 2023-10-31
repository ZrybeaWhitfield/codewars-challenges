// Kata: 8kyu "String repeat" https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// tags: STRINGS,FUNDAMENTALS

// my solution: 
function repeatStr (n, s) {
    let str = ''
    let i = 0
    while(i < n){
      str+= s
      i++
    }
    return str;
}