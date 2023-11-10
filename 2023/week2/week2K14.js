// Kata: 7kyu "Leap Years" https://www.codewars.com/kata/526c7363236867513f0005ca

// tags: DATE TIME, ALGORITHMS

// my solution:

function isLeapYear(year) {
    if(year%400 == 0) return true
    if(year%100 == 0) return false
    if(year%4 == 0) return true
    return false
  }