// Kata: 7kyu "Colour Association" https://www.codewars.com/kata/56d6b7e43e8186c228000637

// Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.
//
// You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.
//
// For example:
//
// var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]

// tags: FUNDAMENTALS, OBJECTS, MAPS, DATA STRUCTURES, MAP/REDUCEALGORITHMS, HASHES
// my solution:

function colourAssociation(array){
  let newArr = []
 array.forEach(element =>{
   let obj = {}
   obj[element[0]] = element[1]
   newArr.push(obj)

 })
  return newArr
}
