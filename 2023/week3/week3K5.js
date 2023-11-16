// Kata: 8kyu "OOP: Object Oriented Piracy" https://www.codewars.com/kata/54fe05c4762e2e3047000add

// tags: FUNDAMENTALS, OBJECT-ORIENTED PROGRAMMING

// my solution:

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function() {
       return 20 < this.draft - this.crew*1.5
     }
   }
   