// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }

  return result
}

const result = capitalize('look,  it is working!')
console.log(result)

module.exports = capitalize

// function capitalize(str) {
//   const words = []
  
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }

//   return words.join(' ')
// }

// function capitalize(str) {
//   let index = 0
//   const result = []
//   let previusIsWhiteSpace = true

//   while (index < str.length) {
//     let char = str[index]

//     if (/\s/.test(char)) {
//       previusIsWhiteSpace = true
//     } else if (/[A-Za-z]/.test(char) && previusIsWhiteSpace) {
//       char = char.toUpperCase()
//       previusIsWhiteSpace = false
//     }
//     result.push(char)
//     index++
//   }
//   return result.join('')
// }