function divisibleBy(numbers, divisor){
  let arr = []
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % divisor == 0){
      return arr.push(numbers[i])

    }
  }
}

divisibleBy([4, 13, 15], 3)
