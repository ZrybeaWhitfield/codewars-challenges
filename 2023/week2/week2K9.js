// Kata: 8kyu "Dollars and Cents" https://www.codewars.com/kata/55902c5eaa8069a5b4000083

// tags: FUNCTIONAL PROGRAMMING, STRINGS, ALGORITHMS

// my solution:
function formatMoney(amount){
    if(!amount.toString().includes('.')) return `$${amount}.00`
    return `$${amount.toFixed(2)}`
  }