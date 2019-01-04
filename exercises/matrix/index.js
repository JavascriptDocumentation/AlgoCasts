// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
/**
 * 1. Create empty array of array called lists
 * 2. Create a counter variable, starting at 1
 * 3. As long as (start column <= end column) AND (start row <= end row)
 * 4. Loop from start column to end column
 * 5. At results [start row][i] assign counter variable
 * 6. Increment counter
 * 7. Increment start row
 * 8. Loop from start row to end row
 * 9. At results[i][end_column] assign counter variable
 * 10. Increment counter
 * 11. Decrement end row
 * 12. ...repeat for other sides
 */

function matrix(n) {
    const results = []

    for (let i = 0; i < n; i++) {
        results.push([])
    }

    let counter = 1
    let startColumn = 0 
    let endColumn = n - 1
    let startRow = 0
    let endRow = n - 1
}

module.exports = matrix;
