function topKFrequent(words, k) {
  let dict = {}

  for (let s of words) {
    if (s in dict) {
      dict[s] += 1
    } else {
      dict[s] = 1
    }
  }

  let x = Object.entries(dict).sort((a, b) => {
    if (a[1] < b[1]) {
      return 1
    }
    if (a[1] > b[1]) {
      return -1
    }
    if (a[1] === b[1]) {
      if (a[0] > b[0]) {
        return 1
      }
      if (a[0] < b[0]) {
        return -1
      }
    }
    return 0
  })

  return x.map(ele => ele[0]).slice(0, k)
};