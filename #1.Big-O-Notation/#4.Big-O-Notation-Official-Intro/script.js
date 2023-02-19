// Big O notations more examples

// O(n^2)
// The for loops iterate over the same array of length.
// For each N words, do N pairin operations
function shoutWordPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + " " + arr[j])
    }
  }
}

shoutWordPairs(['HTML', 'CSS', 'JavaScript'])

// O(n^m)
// The outer loop iterates over array of length N,
// the inner loop iterates over array of length M
function shoutWordPairs2(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr1[i] + " " + arr2[j])
    }
  }
}

shoutWordPairs2(['HTML', 'CSS', 'JavaScript'], ['React', 'TypeScript'])