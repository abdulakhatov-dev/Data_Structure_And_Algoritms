// Which one is "better" implementation?

// #1
const sumUpTo = n => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += 1;
  }
  return total
}

// #2
const sumUpTo2 = n => {
  return (n * (n + 1)) / 2;
}

