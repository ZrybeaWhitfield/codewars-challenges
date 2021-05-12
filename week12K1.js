// Kata: 6kyu "Count letters in string" https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d

// In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
//
// Example:
//
// letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

// tags: FUNDAMENTALS, STRINGS, HASHES, DATA STRUCTURES
// my solution:
function letterCount(s){
  let obj = {}
  s.split('').forEach(letter =>{
    if(obj[letter]){
    obj[letter] += 1

    }else{
      obj[letter] = 1
    }

  })
  return obj
}


//ALT USING MAP

function letterCount(s){
    let map = new Map()

  s.split('').forEach(letter =>{
    if(map.has(letter)){

      map.set(letter, map.get(letter) + 1)
    }else{
      map.set(letter, 1)
    }

  })
  const obj = Array.from(map).reduce((obj, [key, value]) => (
  Object.assign(obj, { [key]: value }) // Be careful! Maps can have non-String keys; object literals can't.
), {});
  return obj
}
