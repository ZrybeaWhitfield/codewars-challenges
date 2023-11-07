// Kata: 8kyu "Find the first non-consecutive number" https://www.codewars.com/kata/58f8a3a27a5c28d92e000144     

// tags: ARRAYS, FUNDAMENTALS

// my solution:
function firstNonConsecutive (arr) {
    let result = null
    if (arr.length <= 1) return result
  
    for(let i = 1; i <= arr.length-1; i++) {
      if(arr[i] !== 1 + arr[i-1]) {
        result = arr[i]
        break;
      }
    }
    
    return result
  }