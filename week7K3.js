// Kata: 7kyu "All unique" https://www.codewars.com/kata/553e8b195b853c6db4000048

// // Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
//
// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
// tags: ALGORITHMS, STRINGS
// my solution:

const hasUniqueChars = str => {return str.split("").length == new Set(str.split("")).size ?  true : false
}
