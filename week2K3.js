// Kata: 8kyu "Sum The Strings" https://www.codewars.com/kata/5966e33c4e686b508700002d
// tags: fundamentals
// my solution:

function sumStr(a,b) {

 let sum = (parseInt(a) + parseInt(b))

  if(a === "" && b === ""){
    return "0"
}else if(b === ""){
  return a
}else if(a === ""){
 return b
}else{
  return sum.toString()
}
}
