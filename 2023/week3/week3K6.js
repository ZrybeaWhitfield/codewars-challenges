// Kata: 8kyu "Broken Counter" https://www.codewars.com/kata/526471539d52735c620000c6

// tags: DEBUGGING, OBJECT-ORIENTED PROGRAMMING

// my solution:

function Counter() {
    this.value = 0;
  }
  
  Counter.prototype.increase = function() {
    return this.value++;
  };
  
  Counter.prototype.getValue = function() {
    return this.value;
  };
  
  Counter.prototype.reset = function() {
    this.value = 0;
  };