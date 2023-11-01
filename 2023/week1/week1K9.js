// Kata: 8kyu "A wolf in sheep's clothing" https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

// tags: FUNDAMENTALS, ARRAYS

// my solution: 

function warnTheSheep(queue) {
    let n= ''
    const scold = "Pls go away and stop eating my sheep";
    
    if(queue[queue.length -1] == "wolf"){
      return scold
    }
    
    for(let i = queue.length -2; i >= 0; i--){
      if (queue[i] === "wolf"){
        n+= queue.length - (i+1)
      }
      
    }
    return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
  }