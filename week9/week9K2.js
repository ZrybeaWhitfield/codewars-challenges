// Kata: 8kyu "Cat years, Dog years" https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b

// Kata Task
// I have a cat and a dog.
//
// I got them at the same time as kitten/puppy. That was humanYears years ago.
//
// Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// tags: FUNDAMENTALS
// my solution:

var humanYearsCatYearsDogYears = function(humanYears) {
  let catYears
  let dogYears

  if(humanYears == 1){
     catYears = 15
     dogYears = 15
    return [humanYears, catYears, dogYears];
  }else if(humanYears == 2){
     catYears = 24
      dogYears = 24
    return [humanYears, catYears, dogYears];
  }else{
     catYears = 24 + ((humanYears -2)*4)
      dogYears = 24 + ((humanYears -2)*5)
    return [humanYears, catYears, dogYears];
  }

  }
