// Kata: 8kyu "Classy Classes" https://www.codewars.com/kata/55a144eff5124e546400005a

// tags: FUNDAMENTALS, OBJECT-ORIENTED PROGRAMMING

// my solution:
class Person {
    constructor(name, age) {
      this.name =name
      this.age =age
    }
    
    get info() {
      return this.getInfo()
    }
    
    getInfo() {
       return `${this.name}s age is ${this.age}`
    }
  }
  