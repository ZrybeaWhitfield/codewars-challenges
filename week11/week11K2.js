// Kata: 8kyu "Sort and Star" https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
// The returned value must be a string, and have "***" between each of its letters.
//
// You should not remove or add elements from/to the array.


// tags: FUNDAMENTALS, STRINGS, ARRAYS
// my solution:

function twoSort(s) {
  let newString = ""
  s.sort()
  let word = s[0]
  for(let i = 0; i < word.length; i++){
    if(word[i] == word[word.length -1]){
      newString += word[i]
    }else{
      newString += word[i] + "***"
    }


  }
  return newString
}
