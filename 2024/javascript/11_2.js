// Kata: 6kyu "Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer" https://www.codewars.com/kata/582887f7d04efdaae3000090/

// tags: Functional Programming, Data Structures, Arrays, Fundamentals, Algorithms, Strings

// my solution:

function findSenior(list) {
    let arr = []
    let age = 0
    
    for(let dev of list){
      if(dev.age >= age){
        age = dev.age
      }
    }
    
    arr = list.filter(dev => dev.age == age)
    return arr
  }