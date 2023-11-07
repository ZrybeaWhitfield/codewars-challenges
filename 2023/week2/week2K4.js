// Kata: 8kyu "To square(root) or not to square(root)" https://www.codewars.com/kata/57f6ad55cca6e045d2000627

// tags: MATHEMATICS, ARRAYS, ALGORITHMS

// my solution:
function squareOrSquareRoot(array) {
    let sqr = []
    for(let i=0; i<array.length; i++) {
      Math.sqrt(array[i]) %1 !== 0 ? sqr.push(array[i]*array[i]) : sqr.push(Math.sqrt(array[i]))
    }
    return sqr;  
  }