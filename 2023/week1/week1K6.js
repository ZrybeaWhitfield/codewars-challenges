// Kata: 8kyu "Get the mean of an array" https://www.codewars.com/kata/563e320cee5dddcf77000158

// tags: ARRAYS, ALGORITHMS

// my solution: 
function getAverage(marks){
    let sum = 0;
    marks.forEach(grade => {
      sum+= grade
    })
    return Math.floor(sum/marks.length)
  }