// Kata: 8kyu "Grasshopper - Personalized Message" https://www.codewars.com/kata/5772da22b89313a4d50012f7
// Personalized greeting
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//
// Use conditionals to return the proper message:
//
// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'waiting


// tags: FUNDAMENTALS, CONDITIONAL STATEMENTS, CONTROL FLOW, BASIC LANGUAGE FEATURES
// my solution:
let greet = (name, owner) =>{
  return name === owner ? "Hello boss" : "Hello guest"
}
