// Kata: 8kyu "UEFA EURO 2016" https://www.codewars.com/kata/57613fb1033d766171000d60/javascript

// A simple kata, my first.
// simply tranform an array into a string, like so:
//
//   transform([4, -56, true, "box"]) => "4-56truebox"
// have fun coding!


// tags: FUNDAMENTALS, STRINGS, ARRAYS
// my solution:

function uefaEuro2016(teams, scores){
  if(scores[0] === scores[1]){
    return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  } else {
    if(scores[0] > scores[1]){
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    }else{
    return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }

  }

}
