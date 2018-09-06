function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false

  const dict = {}

  for (let s of str1) {
    if (dict[s]) {
      dict[s] += 1
    } else {
      dict[s] = 1
    }
  }

  for (let s of str2) {
    if (!dict[s]) {
      return false
    } else {
      dict[s] -= 1
    }
  }

  return true
}