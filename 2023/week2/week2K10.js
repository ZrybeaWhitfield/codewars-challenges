// Kata: 7kyu "Sum of two lowest positive integers" https://www.codewars.com/kata/558fc85d8fd1938afb000014

// tags: ARRAYS, FUNDAMENTALS

// my solution:

function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b) => a-b)
    return numbers[1] + numbers[0]
  }