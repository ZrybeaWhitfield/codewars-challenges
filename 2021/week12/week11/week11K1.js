// Kata: 7kyu "Peak array index" https://www.codewars.com/kata/5a61a846cadebf9738000076

// Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.
//
// For example:
//
// peak([1,2,3,5,3,2,1]) = 3, because the sum of the elements at indexes 0,1,2 == sum of elements at indexes 4,5,6. We don't sum index 3.
// peak([1,12,3,3,6,3,1]) = 2
// peak([10,20,30,40]) = -1
// --For Haskell
// peak [1,12,3,3,6,3,1] == Just 2
// peak [10,20,30,40]  == Nothing
// The special case of an array of zeros (for instance [0,0,0,0]) will not be tested.
//
// More examples in the test cases.
//
// Good luck!
//


// tags: ALGORITHMS, ARRAYS
// my solution:

function peak(arr){

  for(let i =0; i< arr.length; i++){
   let left = arr.slice(0, i)
   let right = arr.slice(i+1)

   if(left.length == 0 || right.length == 0){
      continue
   }else{
     left = left.reduce((a,c) => a += c)
    right = right.reduce((a,c) => a += c)

    if(left === right){
      return i
    }

  }
   }return -1


}
