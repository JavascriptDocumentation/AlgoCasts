// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
/** 
character map is an object where we take every character out of the source string, 
we add as a key to the object and add a value based on the number of character that 
appear in the string
*/

function maxChar(str) {
    const charMap = {}
    let max = 0;
    let maxChar = ''; 

    //iterate over the source string
    for (let char of str) {
        //if the charMap exists
        if (charMap[char]){
            //increment it by 1
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char
        }
    }

    return maxChar;
}

module.exports = maxChar;
