// Kata: 7kyu "Number of Decimal Digits" https://www.codewars.com/kata/58fa273ca6d84c158e000052

// tags: STRINGS, FUNDAMENTALS

// my solution:

function digits(n) {
    let result = 0;
    n.toString().split("").forEach(num => result++)
    return result
  }