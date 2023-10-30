// Kata: 8kyu "Reversed sequence" https://www.codewars.com/kata/5a00e05cc374cb34d100000d/javascript

// tags: FUNDAMENTALS

// my solution:

const reverseSeq = n => {
    let arr = []
    for (let i = n; i >0; i--) {
      arr.push(i)
    }
    return arr;
  };