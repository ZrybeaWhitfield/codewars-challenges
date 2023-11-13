// Kata: 8kyu ""this" is a problem" https://www.codewars.com/kata/547c71fdc5b2b38db1000098

// tags: FUNDAMENTALS, LANGUAGE FEATURES, OBJECT-ORIENTED PROGRAMMING

// my solution:
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName
}