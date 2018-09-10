function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false
  const seen = {}
  for (let s in str1) {
    let char = str1[s]
    if (char in seen) {
      seen[char] += 1
    } else {
      seen[char] = 1
    }
  }

  for (let s in str2) {
    let char = str2[s]
    if (!seen[char]) {
      return false
    } else {

      seen[char] -= 1
    }
  }
  return true
}