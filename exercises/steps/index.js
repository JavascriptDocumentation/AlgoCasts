// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'
/**
 * 1. From 0 to n iterate through rows
 * 2. Create an empty string, stair
 * 3. From 0 to n iterate through columns
 * 4. IF the current column is equal to or less than the current row
 * 5. Add a "#" to stair
 * 6. ELSE
 * 7. Add a space to stair
 * 8. Console log stair
 * 
 */

function steps(n) {
    for(let row = 0; row < n; row++) {
        let stair = ''

        //row processing 
        for(let column = 0; column < n; column++) {
            if(column <= row) {
                stair += '#'
            } else {
                stair += ' '
            }
        }

        console.log(stair)
    }
}

module.exports = steps;
