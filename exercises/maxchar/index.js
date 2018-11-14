// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }
  //console.log(charMap)
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }
  return maxChar
}

console.log('maxChar', maxChar('qweraaabbyyyy'))

module.exports = maxChar

// function maxChar(str) {
//   const arr = str.split('').sort()
//   console.log(arr)
//   let maxLen = 0
//   let maxChar = ''
//   let i = 0
//   while (i < arr.length) {
//     let ch = arr[i]
//     let len = 1
//     i++
//     while(arr[i] === ch) {
//       //console.log(arr[i])
//       len++
//       i++
//     }
//     if (len > maxLen) {
//       maxLen = len
//       maxChar = ch
//     }
//   }
//   return maxChar
// }

// function maxChar(str) {
//   const arr = str.split('')
//   console.log(arr)
//   const characters = arr.reduce((acc, current) => {
//     if (current in acc) {
//       acc[current]++
//     } else {
//       acc[current] = 1
//     }
//     return acc
//   }, {})
//   //console.log(characters)
//   let maxChar = ''
//   let maxCount = 0
//   for(const char in characters) {
//     if (characters[char] > maxCount) {
//       maxChar = char
//       maxCount = characters[char]
//     }
//   }
//   return maxChar
// }

// Create map
// const chars = {}

//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1
//     // if (!chars[char]) {
//     //   chars[char] = 1
//     // } else {
//     //   chars[char]++
//     // }
//   }
//   console.log(chars)

