// Kata: 8kyu "Grasshopper - Check for factor" https://www.codewars.com/kata/55cbc3586671f6aa070000fb

// tags: MATHEMATICS, FUNDAMENTALS

// my solution: 

function checkForFactor (base, factor) {
    if (base%factor == 0) {
      return true
    }
    return false
  }

// OR

function checkForFactor (base, factor) {
    return base%factor == 0 ? true : false
}

// OR

function checkForFactor (base, factor) {
    return base%factor == 0
}