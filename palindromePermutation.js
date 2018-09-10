function palindromePermutation(str) {

  const map = {}

  for (let s of str) {
    console.log(s)
    if (s in map) {
      map[s] += 1
    } else {
      map[s] = 1
    }
  }

  let count = 0

  Object.keys(map).forEach(key => {
    count += map[key] % 2
  })

  return count <= 1
}