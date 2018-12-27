// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//reverseInt(15) === 51
//reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversed = n
    .toString() //convert it to a string
    .split()    //split it into an array
    .reverse()  //reverse and array
    .join('');   //join it into a string

    return parseInt(reversed) * Math.sign(n); //pull an integer out of a string
    
}

module.exports = reverseInt;
