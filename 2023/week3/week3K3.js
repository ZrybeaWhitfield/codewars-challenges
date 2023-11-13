// Kata: 8kyu "Barking mad" https://www.codewars.com/kata/54dba07f03e88a4cec000caf

// tags: FUNDAMENTALS, OBJECT-ORIENTED PROGRAMMING

// my solution:
function Dog (breed) {
    this.breed = breed;
    this.bark = function() {
    return "Woof";
    };
  }
  
  var snoopy = new Dog("Beagle");
  var scoobydoo = new Dog("Great Dane");