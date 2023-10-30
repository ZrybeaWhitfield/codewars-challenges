// Kata: 8kyu "Convert number to reversed array of digits" https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// tags: ARRAYS, FUNDAMENTALS

// my solution: 

function digitize(n) {
    n = String(n).split('')
    let arr = []
    n.forEach(digit => {
      arr.unshift(parseInt(digit))
    })
    return arr
  }

// OR
n = String(n).split('').map((elem) => parseInt(elem));
  let len = Math.floor(n.length / 2);
  let temp = 0;
  let backCounter = n.length - 1;
  for (i = 0; i < len; i++) {
    temp = n[i];
    n[i] = n[backCounter];
    n[backCounter] = temp;
    backCounter--;
  }
  return n;