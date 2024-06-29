// Kata: 7kyu "Partial Word Searching" https://www.codewars.com/kata/54b81566cd7f51408300022d/

// tags: ARRAYS, STRINGS, FUNDAMENTALS

// my solution:

function wordSearch(query, seq) {
    let returnArr = []
    seq.forEach(elem => {
        if (elem.toLowerCase().includes(query.toLowerCase())) {
            returnArr.push(elem)
        }
    })
    if (returnArr.length == 0) returnArr.push("Empty")
    return returnArr
}


//Refactored:
function wordSearch(query, seq) {
    let subArray = seq.filter((x) => x.toLowerCase().includes(query.toLowerCase()))
    return subArray.length > 0 ? subArray : ["Empty"]
}