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
  const chunked = []
  let index = 0

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))
    index += size
  }
  return chunked
}

// const result =  chunk([1, 2, 3, 4, 5], 10)
// console.log(result)

module.exports = chunk

// function chunk(array, size) {
//   const resultArr = []
//   let i = 0
//   let subArr = []
//   while (i < array.length) {
//     if (subArr.length < size) {
//       subArr.push(array[i])
//     } else {
//       resultArr.push(subArr)
//       subArr = []
//       subArr.push(array[i])
//     }
//     i++
//   }
//   resultArr.push(subArr)
//   return resultArr
// }

// function chunk(array, size) {
//   const chunked = []
//   array.forEach(element => {
//     let lastElementChunked = chunked[chunked.length - 1]
//     if (!lastElementChunked || lastElementChunked.length === size) {
//       let newChunk = []
//       newChunk.push(element)
//       chunked.push(newChunk)
//     } else {
//       lastElementChunked.push(element)
//     }
//   })
//   return chunked
// }

// function chunk(array, size) {
//   const chunked = []
//   for (let element of array) {
//     const last = chunked[chunked.length - 1]
//     if (!last || last.length === size) {
//       chunked.push([element])
//     } else {
//       last.push(element)
//     }
//   }
//   return chunked
// }
