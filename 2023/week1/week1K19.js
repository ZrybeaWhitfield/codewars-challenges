// Kata: 8kyu "How much water do I need?" https://www.codewars.com/kata/575fa9afee048b293e000287

// tags: MATHEMATICS, FUNDAMENTALS

// my solution: 
function howMuchWater(water, load, clothes){
    if(clothes > load*2) return 'Too much clothes'
    if(clothes <load) return 'Not enough clothes'
  
    for(let i =1; i <= clothes - load; i++){
      water += water*.1
    }
    
    return +water.toFixed(2)
  }