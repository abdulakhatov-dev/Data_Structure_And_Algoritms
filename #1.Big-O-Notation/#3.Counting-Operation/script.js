// Counting Operations

// Let's measure the performance of our code by count the operations it has,
// rathan than manually timing it!

// The number of operations in your code is easy to standardize and remains
//  consistent regardless of computers, compared to manually timing our code!

// #1
// Always jsut 3 operations, no matter how large N is
const sumUpTo2 = n => {
  return (n * (n + 1)) / 2;
}


// #2
// Takes 1 * N operations!
const sumUpTo = n => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1;
  }
  return total
}

let t1, t2 

t1 = Date.now()
sumUpTo(2500000000)
t2 = Date.now()
console.log(`${(t1 - t2) / 1000} seconds`);


t1 = Date.now()
sumUpTo2(2500000000)
t2 = Date.now()
console.log(`${(t1 - t2) / 1000} seconds`);