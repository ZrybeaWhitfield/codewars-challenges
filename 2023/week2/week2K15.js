// Kata: 7kyu "Flatten and sort an array" https://www.codewars.com/kata/57ee99a16c8df7b02d00045f

// tags: ARRAYS, SORTING, FUNDAMENTALS

// my solution:
"use strict";

function flattenAndSort(array) {
  const isEmpty = array.length == 0
  let flat = []
  
  for(let i = 0; i < array.length; i++) {
    if(!isEmpty) {
      flat.push(...array[i])
    }
  }
  return flat.sort((a, b)=> a-b);
}