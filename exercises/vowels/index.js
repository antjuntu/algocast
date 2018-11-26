// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

vowels('antti')

module.exports = vowels

// function vowels(str) {
//   let count = 0
//   const letters = ['a', 'e', 'i', 'o', 'u']
//   for (let char of str.toLowerCase()) {
//     if (letters.includes(char)) {
//       count++
//     }
//   }

//   return count
// }

// function vowels(str) {
//   let counter = 0
//   let vowels = { a: 1, e: 1, i: 1, o: 1, u: 1 }
//   for (let char of str) {
//     if (char.toLowerCase() in vowels) {
//       counter++
//     }
//   }
//   return counter
// }

// function vowels(str) {
//   let counter = 0
//   let vovels = ['a', 'e', 'i', 'o', 'u']
//   for (let char of str) {
//     for (v of vovels) {
//       if (v === char.toLowerCase()) {
//         counter++
//         break
//       }
//     }
//   }
//   return counter
// }
