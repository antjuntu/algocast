// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA)
  const bCharMap = buildCharMap(stringB)

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false
  }

  for (let char in aCharMap) {
    if (!bCharMap[char] || bCharMap[char] !== aCharMap[char]) {
      return false
    }
  }

  return true
}

function buildCharMap(str) {
  const charMap = {}
  
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1
  }

  return charMap
}


const res = anagrams('h..... ello', 'ehllO!!!!! ')
console.log(res)

module.exports = anagrams

// function anagrams(stringA, stringB) {
//   const charactersA = {}
//   for (const char of stringA) {
//     if (charactersA[char]) {
//       charactersA[char]++
//     } else {
//       charactersA[char] = 1
//     }
//   }
  
//   let counter = 0
//   for (const char of stringB) {
//     if (!charactersA[char] || charactersA[char] < 1) {
//       return false
//     }
//     else {
//       charactersA[char]--
//       counter++
//     }
//   }
//   return counter === stringB.length
//  }

// function anagrams(stringA, stringB) {
//   if (stringA.length !== stringB.length) {
//     return false
//   }
//   const sortedA = stringA.split('').sort().join('')
//   //console.log(sortedA)
//   const sortedB = stringB.split('').sort().join('')
//   //console.log(sortedB)
  
//   let index = 0
//   while (index < sortedA.length) {
//     if (sortedA[index] !== sortedB[index]) {
//       return false
//     }
//     index++
//   }
//   return true
//  }
