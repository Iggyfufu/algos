function minSubArrayLen(array, num) {
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < array.length) {
    if (total < num && end < array.length) {
      total += array[end]
      end++
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start)
      total += array[start]
      start++
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen
}