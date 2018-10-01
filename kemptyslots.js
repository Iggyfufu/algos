/* There is a garden with N slots. In each slot, there is a flower. The N flowers will bloom one by one in N days. In each day, there will be exactly one flower blooming and it will be in the status of blooming since then.

Given an array flowers consists of number from 1 to N. Each number in the array represents the place where the flower will open in that day.

For example, flowers[i] = x means that the unique flower that blooms at day i will be at position x, where i and x will be in the range from 1 to N.

Also given an integer k, you need to output in which day there exists two flowers in the status of blooming, and also the number of flowers between them is k and these flowers are not blooming.

If there isn't such day, output -1. */

let kEmptySlots = function (flowers, k) {
  let days = new Array(flowers.length)
  for (let i = 0; i < flowers.length; i++) {
    days[flowers[i] - 1] = i + 1
  }

  let ans = Infinity
  let left = 0
  let right = k + 1

  while (right < days.length) {
    for (let i = left + 1; i < right; i++) {
      if (days[i] < days[left] || days[i] < days[right]) {
        left = i;
        right = i + k + 1;
        continue;
      }
    }

    ans = Math.min(ans, Math.max(days[left], days[right]))
    left = right
    right = left + k + 1
  }

  return ans < Infinity ? ans : -1
}

kEmptySlots([1, 3, 2], 1) //2