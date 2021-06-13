// Kata: 7kyu "Switcheroo" https://www.codewars.com/kata/57f759bb664021a30300007d

// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:
//
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// tags: FUNDAMENTALS, STRINGS
// my solution:

function switcheroo(x){
  let arr = []
 for(let i = 0; i < x.length; i++){
  if(x[i] == "c"){
    arr.push(x[i])
  }else if(x[i] == "a"){
     arr.push('b')
   }else if(x[i] == "b"){
     arr.push('a')
   }
 }
return arr.join('')
}
