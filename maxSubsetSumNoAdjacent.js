// Maximum Subset Sum With No Adjacent Elements

// Write a function that takes in an array of positive integers and returns an integer
// representing the maximum sum of non-adjacent elements in the array. If a sum cannot be 
// generated, the function should return 0.

// Sample input: [75, 105, 120, 75, 90, 135]
// Sample output: 300 (75, 120, 135)

function maxSubsetSumNoAdjacent(array) {
  if(array.length === 0) return 0
  if(array.length === 1) return array[0]
  
  let firstPointer = array[0]
  let secondPointer = Math.max(array[0], array[1])

  for(let i = 2; i < array.length; i++) {
    const current = Math.max(secondPointer, firstPointer + array[i])
    firstPointer = secondPointer
    secondPointer = current
  }

  return secondPointer
}