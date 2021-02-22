// Kata: 8kyu "Sum of Positive" https://www.codewars.com/kata/5715eaedb436cf5606000381
// tags: fundamentals, arrays, numbers
// my solution:

function positiveSum(arr) {
  let neg = []
  let sum = 0

  for(let i = 0; i< arr.length; i++){

    if(arr[i]< 0){
      neg.push(arr[i])
    }else{
      sum += arr[i]
    }
  }
  return sum
}
