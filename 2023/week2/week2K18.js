// Kata: 8kyu "Color Ghost" https://www.codewars.com/kata/53f1015fa9fe02cbda00111a

// tags: OBJECT-ORIENTED PROGRAMMING, FUNDAMENTALS

// my solution:
class Ghost {
    constructor() {
      this.colors = ['white', 'yellow', 'purple', 'red']
    }
      
    get color() {
      return this.colors[this.getRandomInt(4)]
    }
      
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
  }