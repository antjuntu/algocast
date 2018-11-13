// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed =  n.toString().split('').reverse().join('')

  return Math.sign(n) * parseInt(reversed)
}

//console.log(reverseInt(0))

module.exports = reverseInt

// function reverseInt(n) {
//   const sign = n < 0 ? -1 : 1
//   n = Math.abs(n)
//   let result = 0
//   while (n > 0) {
//     result = result * 10
//     result = result + n % 10
//     n = Math.floor(n / 10)
//   }
//   return result * sign
// }

// function reverseInt(n) {
//   const sign = Math.sign(n)

//   let strArray = Math.abs(n).toString().split('').reverse()
  
//   // Ignore zeros at the end of array
//   let index = 0
//   while(strArray[index] === '0') {
//     index++
//   }
//   if (index >= strArray.length) {
//     return 0
//   } else {
//     strArray = strArray.slice(index)
//     return sign * parseInt(strArray.join(''))
//   }
// }
