// sumZero
// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

const sumZero = (arr) => {
  //make two pointer to point at first and last elements
  let left = 0;
  let right = arr.length - 1;
  // whichever of two elements is bigger move forward/backward two point on a smaller elements
  while (left < right) {
    if (arr[right] + arr[left] === 0) {
      console.log([arr[right], arr[left]]);
      return [arr[right], arr[left]];
    } else if (arr[right] + arr[left] > 0) {
      left--;
    } else {
      right++;
    }
  }
  console.log(-1);
};

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
