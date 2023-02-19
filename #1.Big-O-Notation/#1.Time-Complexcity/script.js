// Which one is "better" implementation?

// It helps you write better code and becomes important as your inputs get bigger(EG User / Posts for an app)/

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

