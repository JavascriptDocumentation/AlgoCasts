// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
/**
 * 1. From 0 to n iterate through rows
 * 2. Create an empty string, stair
 * 3. From 0 to (n * 2 - 1) iterate through columns
 * 4. IF the current column is equal to or less than the current row
 * 5. Add a "#" to stair
 * 6. ELSE
 * 7. Add a space to stair
 * 8. Console log stair
 */

function pyramid(n) {
    const midpoint = Math.floor((2  * n - 1)/2)

    for(let row = 0; row < n; row++) {
        let level = ''
        for(let column = 0; column < n * 2 - 1; column++) {
            if(midpoint - row <= column && midpoint + row >= column) {
                level += "#"
            } else {
                level += '  '
            }
        }
    }

    console.log(level)

}

module.exports = pyramid;
