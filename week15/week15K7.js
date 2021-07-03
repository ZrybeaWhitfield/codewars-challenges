// Kata: 8kyu "Max Headroom and JavaScript style" https://www.codewars.com/kata/52a47dd7e950edabfa000391

// Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

// tags: BUGS, PITFALLS

// my solution:

function getMax1()
{
  var max =
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
let max = {
    name: 'Max Headroom'
  }

return max
}
