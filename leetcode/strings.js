// Write a function that reverses a string. The input string is given as an array of characters s

var reverseString = function(s) {
   return s.reverse()
}


// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

//Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var reverse = function(x) {

    let result = parseInt(Math.abs(x).toString().split("").reverse().join("")) * Math.sign(x)

    if(result > 2**31 -1 || result < -(2**31)){
        return 0
    }else{
        return result
    }

};
//getting fails at integers tyhat are above 64-bit?
