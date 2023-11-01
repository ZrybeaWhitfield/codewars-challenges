// Kata: 8kyu "Sum Mixed Array" https://www.codewars.com/kata/57eaeb9578748ff92a000009

// tags: FUNDAMENTALS, STRINGS, ARRAYS


// my solution: 

function sumMix(x){
    let sum =0;
    x.forEach(num => sum += parseInt(num))
    return sum;
  }