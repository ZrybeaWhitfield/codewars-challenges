// Kata: 8kyu "Grasshopper - Create the rooms" https://www.codewars.com/kata/56a29b237e9e997ff2000048

// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).


// tags: FUNDAMENTALS
// my solution:

var rooms = {
  room1:{
    name: "",
    description: "",
    completed: true
  },
  room2:{
    name: "",
    description: "",
    completed: true
  },
  room3:{
    name: "",
    description: "",
    completed: true
  }

}


//alt
var rooms = new Map()

rooms.set("room1", {name: "", description: "", completed: true})
      .set("room2", {name: "", description: "", completed: true})
      .set("room3", {name: "", description: "", completed: true});
