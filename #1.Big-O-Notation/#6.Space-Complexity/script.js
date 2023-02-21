// Space Complexity

// Space Complexity:
{
  // How much more memory use (RAM) do we need as the input provided to the Code gets larger?
}

// Time Complexity: 
{
  // How much more runtime do we need as the input provided to the Code gets larger?
}

// Both of the above still use Big O Notation

// Space Complexity Rules of Thumb
{
  // Storing values in variables always takes up memory

  // Most Primitives (Boolean, Numbers) takes up O(1) / Constant Space.
  // var x = 100 & var x = 200 takes up same amount of memory

  // String, Array, and Object takes up O(n) / Linear Space
  // An Array w/4 elements takes up twice the memory of Array w/2 elements.

  // O(1) Space Complexity
  {
    function shoutWhatsUpDawg(n) {
      for(let i = 0; i < n; i++) {
        console.log("Whats up dawg?");
      }
    }
  }
  // O(1) Space Complexity
  {
    const sum = arr => {
      let total = 0;
      arr.forEach(num => {
        total += num;
      });
      return total
    }
  }
  // O(n) Space Complexity
  {
    const reverseString = str => {
      let reversedStr = "";
      for(let i = 0; i < str.length; i++) {
        reversedStr = str[i] + reverseString;
      }
      return reversedStr
    }
  }
  // O(n/2) -> O(n) Space Complexity
  {
    const keepRandom = arr => {
      let resArr = [];
      arr.forEach(item => {
        if(Math.random() < 0.5) {
          resArr.push(item)
        }
      })
      return resArr;
    }
  }
}

// Why is Time Complexity Prioritized Over Space Complexity? 
{
  // Costs to produce and run processors are much higher compared to RAM
    // Better use of time writing code that is easier on the processor...

  // Consumers / Users in general care more about speed than RAM usage.
    // Google Chrome...
}
