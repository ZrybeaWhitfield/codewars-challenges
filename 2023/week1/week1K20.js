// Kata: 8kyu "Sum without highest and lowest number" https://www.codewars.com/kata/576b93db1129fcf2200001e6

// tags: FUNDAMENTALS

// my solution: 
function sumArray(array) {
    if(array == null || array.length <= 2) return 0
    return array.sort((a,b)=> a -b).slice(1, -1).reduce((a,b)=> a+b)
  }