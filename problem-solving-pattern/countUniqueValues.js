// countUniqueValues
// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4

const countUniqueValues = (arr) => {
  //make a uniqueCounter for keeping track
  let uniqueCounter = 0;
  //create two pointer to compare the pair of elements
  let one = 0;
  let two = 1;
  //make a loop for the array,
  for (let i = 0; i < arr.length; i++) {
    //subtract the pairs,
    //if 0 then do nothing
    if (arr[one] !== arr[two]) {
      //else count
      uniqueCounter++;
    }
    one++;
    two++;
  }
  console.log(uniqueCounter);
  return uniqueCounter;
};

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
