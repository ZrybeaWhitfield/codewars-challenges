// Kata: 8kyu "Find the smallest integer in the array" https://www.codewars.com/kata/55a2d7ebe362935a210000b2

// tags: FUNDAMENTALS

// my solution:
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a, b) => a - b)
      return args[0]
    }
  }