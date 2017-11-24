// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const log = (x, y) => console.log(x, y);

function chunk(array, size) {
  const chunked = [];
  for (let el of array) {
    console.log('el we are looking at is: ', el);
    const last = chunked[chunked.length - 1];
    log('last: ', last);    
    if (!last || last.length === size) {
      chunked.push([el]);
    } else {
      last.push(el);
    }
  }
  console.log('chunked: ', chunked);
  return chunked;
}

// Second solution

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  console.log('chunked: ', chunked);
  return chunked;
}

chunk([44,324,543,144,545], 2);
module.exports = chunk;
