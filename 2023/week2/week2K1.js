// Kata: 8kyu "Who is going to pay for the wall?" https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

// tags: FUNDAMENTALS, STRINGS

// my solution:
function whoIsPaying(name){
    let petition = []
    name.length <= 2? petition.push(name) : petition.push(name, name.slice(0,2))
    return petition
  }