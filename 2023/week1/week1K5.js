// Kata: 8kyu "Remove First and Last Character" https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

// tags: STRINGS,FUNDAMENTALS

// my solution: 
function removeChar(str){
    return str.slice(1, -1)
};
    
//OR

function removeChar(str){
    let newStr = ''
    for(let i = 1; i < str.length -1; i++) {
        newStr+=str[i]
    }
    return  newStr
};