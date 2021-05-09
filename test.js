//shuffle deck of cards (array of 52 elements)


//dursetenfield shuffle
function shuffleArray(deck) {
    for (let i = deck.length - 1; i > 0; i--) { //starting at the last element working through the deck backwards
        const j = Math.floor(Math.random() * (i + 1)); // find a random index between 0 and i
        [deck[i], deck[j]] = [deck[j], deck[i]]; // swap the elements at index i and index j 
    }return deck
}

//fisher-yates shuffle
function shuffleArray2(deck) {
  var currentIndex = deck.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = temporaryValue;
  }

  return deck;
}


console.log(shuffleArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52]));
