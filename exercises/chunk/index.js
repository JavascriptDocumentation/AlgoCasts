// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    //array that holds different chunks of data
    const chunked = []
    //iterate through array
    for(let element of array) {
        //to get the last element of the array
        const last = chunked[chunked.length - 1]

        //if last does not exist or if last is equal to chunk size
        if(!last || last.length === size) {
            //add new element to chunked
            chunked.push([element])
        } else {
            last.push(element)
        }
    }
    return chunked 
}

module.exports = chunk;
