// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    //make a character map of stringA and stringB with a helper function
    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)

    //pull out the keys from both object and count the keys
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false
    }
    //iterate over the objects - if we are iterating over an array we use `of`, over an object us `in`
    for(let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false
        }
    }

    return true
}

//helper function for the character map
function buildCharMap(str) {
    const charMap = {}

    for(let char of str.replace(/[^\w]/g).toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1 // || 1 - handles the case in case the character has not been assigned to the character map
    }
    return charMap
}

module.exports = anagrams;

//Solution 2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().sort().join('')
}