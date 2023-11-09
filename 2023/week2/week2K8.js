// Kata: 7kyu "Balanced Number (Special Numbers Series #1 )" https://www.codewars.com/kata/5a4e3782880385ba68000018

// tags: FUNDAMENTALS, MATHEMATICS

// my solution:
function balancedNum(number)
{  
  let num = number.toString().split("")
  if(num.length< 3) return "Balanced"
  
  let left = 0
  let right = 0
  let end = num.length -1
  
   if(num.length%2 ===0 ){
     for(let i =1; i <num.length/2; i++){
       left+= Number(num[i-1])
       right+= Number(num[end])
      end--
     }
   } else {
     for(let i = 0; i < Math.floor(num.length/2); i++) {
      left+= Number(num[i])
      right+= Number(num[end])
      end--
      }
   }
  
  return left == right ? "Balanced" : "Not Balanced"
}