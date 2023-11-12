// Kata: 8kyu "The Feast of Many Beasts" https://www.codewars.com/kata/5aa736a455f906981800360d

// tags: STRINGS, FUNDAMENTALS

// my solution:

function feast(beast, dish) {
    return beast[0] == dish[0] && beast.endsWith(dish[dish.length -1])
  }