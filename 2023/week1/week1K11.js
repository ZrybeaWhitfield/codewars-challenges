// Kata: 8kyu "Multiplication table for number" https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/

// tags: STRINGS,FUNDAMENTALS

// my solution: 

function multiTable(number) {
    let result = '';
    
    for(let i =1; i<= 10; i++) {
      i ==10? result+= `${i} * ${number} = ${i*number}`: result+= `${i} * ${number} = ${i*number}\n`
    }
    return result
  }