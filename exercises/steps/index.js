// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (row === n) {
    return
  }
  if (stair.length === n) {
    console.log(stair)
    return steps(n, row + 1)
  }
  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }
  steps(n, row, stair)
}

steps(4)

module.exports = steps

// function steps(n, row = 0, stair = '') {
//   if (n === row) {
//     return
//   }

//   if (n === stair.length) {
//     console.log(stair)
//     return steps (n, row + 1)
//   }

//   if (stair.length <= row) {
//     stair += '#'
//   } else {
//     stair += ' '
//   }
//   steps(n, row, stair)
// }

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//     for (let col = 0; col < n; col++) {
//       if (col <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//     console.log(stair)
//   }
// }

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = ''
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         str += '#'
//       } else {
//         str += ' '
//       }
//     }
//     console.log(str)
//   }
// }

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = ''
//     for (let j = 1; j <= i; j++) {
//       str += '#'
//     }
//     for (let j = i + 1; j <= n; j++) {
//       str += ' '
//     }
//     console.log(str)
//   }
// }
