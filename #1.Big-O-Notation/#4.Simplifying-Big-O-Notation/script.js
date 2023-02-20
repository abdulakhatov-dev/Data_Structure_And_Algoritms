// Simplifying Big O Notation

// Contstants do NOT Matter
{
  // O(12) -> O(1)
  // O(702) -> O(1)
  // O(2n) -> O(n)
  // O(n / 2) -> O(n)
  // O(12n ^ 2) -> O(n^2)
}

// Smaller Terms do NOT Matter
{
  // O(n + 10) -> O(n)
  // O(1337 + 50) -> O(n)
  // O(n^2 + 13n + 8) -> O(n^2)
}

// Why do we Simplify Big O?

// Constants do NOT Matter:
{
  // -Imagine that Big O only cares about Graph Shape in the long run...
}

// Smaller Terms do NOT Matter
{
  // Big O only cares about the number of operations to do as N approaches 
  // O(n^2 + n + 8) -> O(n^2)
}


// Examples

// #1 O(3) -> O(1)
{
  const sumUpTo = n => {
    return (n * (n + 1) / 2);
  }
}

// #2 O(n) -> O(n) 
{
  const sumUpTo2 = n => {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += 1;
    }
    return total;
  }
}

// #3 O(2n) -> O(n)
{
  function shoutWhatsUpDawg(n) {
    for (let i = 0; i < n; i++) {
      console.log("Whats up dawg?!");
    }
    for (let i = 0; i < n; i++) {
      console.log("Whats up dawg?!");
    }
  }
}

// #3 O(4) -> O(1)
{
  function shoutWhatsUpDawg(n) {
    for (let i = 0; i < 4; i++) {
      console.log("Whats up dawg?!");
    }
  }
}

// Pop Quiz!
{
  // What us the Bug O Notation / Time Comoplexity of this function?
  function shoutOut(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
      console.log(`Whats up dawg! This is shoutout number ${i}`);
    }
  }
  // Big O only cares about worst case scenarios and general trends as N approaches Infinity
}

// Other terms for Big O Notation / Time Complexity
{
  // O(1) -> Constant Time
  // O(n) -> Linear Time
  // O(n^2) -> Quadratic Time
}

// Big O Notation / Time Complexity of other things...
{
  // Arithmetic Operations have constant time complexity of O(1):
  // It takes your processor the same amount of time to do 1 + 1 as 1,000,000 + 1
}

// Variable Assignment has constant time complexity of O(1):
{
  // It takes your processor the same amount of time to do var x = 1 as var x = 1,000,000
}
