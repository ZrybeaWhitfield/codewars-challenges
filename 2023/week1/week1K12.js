// Kata: 8kyu "Count the Monkeys!" https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// tags: ARRAYS, FUNDAMENTALS, LISTS, ALGORITHMS

// my solution: 

function monkeyCount(n) {
    let monkeys = [];
    for(let i =1; i <=n; i++) {
      monkeys.push(i)
    };
    return monkeys;
  }