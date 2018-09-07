function maxSubArraySum(array, num) {
  if(num > array,length) return null
  let max = 0

  for(let i = 0; i < num; i++) {
    max += array[i]
  }

  let tempSum = max
  for(let i = num; i < array.length; i++) {
    tempSum -= array[i - num] + array[i]
    max = Math.max(tempSum, max)
  }

  return max
} 