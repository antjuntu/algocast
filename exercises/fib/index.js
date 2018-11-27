// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const cache = [0,1]

function fib(n) {

  if (n < 2) {
    return cache[n]
  }
  
  if (!cache[n-2]) {
    cache[n-2] = fib(n-2)
  }
  if (!cache[n-1]) {
    cache[n-1] = fib(n-1)
  }
  return cache[n-2] + cache[n-1]
}

console.log(fib(1000))

module.exports = fib

//---------------------------------------------------------
// function memoize(fn) {
//   const cache = {}
//   return function(...args) {
//     if (cache[args]) {
//       return cache[args]
//     }

//     const result = fn.apply(this, args)
//     cache[args] = result

//     return result
//   }
// }

// function fib(n) {
//   if (n < 2) {
//     return n
//   }
//   return fib(n-2) + fib(n-1)
// }

// fib = memoize(fib)
//---------------------------------------------------------

// function fib(n) {
//   // Bad solution, exponential time complexity!!!!
//   if (n < 2) {
//     return n
//   }
//   return fib(n-2) + fib(n-1)
// }

// function fib(n) {
//   const result = [0, 1]

//   for (let j = 2; j <= n; j++) {
//     result[j] = result[j-2] + result[j-1]
//   }
//   return result[n]
// }

// function fib(n) {
//   if (n === 0) {
//     return 0
//   }
//   let a = 0
//   let b = 1
//   let index = 1
//   while (index < n) {
//     let swap = b
//     b = a + b
//     a = swap 
//     index++
//   }
//   return b
// }
