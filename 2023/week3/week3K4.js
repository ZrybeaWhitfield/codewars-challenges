// Kata: 8kyu "Playing with cubes II" https://www.codewars.com/kata/55c0ac142326fdf18d0000af

// tags: FUNDAMENTALS, OBJECT-ORIENTED PROGRAMMING

// my solution:
class Cube {
    constructor(side =0) {
      this.setSide(side)
    }
    
    getSide() {
      return this.side; 
    }
    setSide(n) {
      this.side = Math.abs(n);
    }
  }