// Kata: 7kyu "Remove consecutive duplicate words" https://www.codewars.com/kata/5b39e91ee7a2c103300018b3

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"



// tags: ALGORITHMS, STRINGS, REGULAR EXPRESSIONS, DECLARATIVE PROGRAMMING, ADVANCED LANGUAGE FEATURES, FUNDAMENTALS
// my solution:
const removeConsecutiveDuplicates = (s) => {
 let split = s.split(" ")
 let arr = []
 for(let i = 0; i < split.length; i++){
   if(split[i+1] !== split[i]){
     arr.push(split[i])
 }
}
 return arr.join(" ")

}
