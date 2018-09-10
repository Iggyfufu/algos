// With Data Structure
function isUnique(str) {
  let dict = {}
  for (let s of str) {
    if (s in dict) {
      return false
    } else {
      dict[s] = 1
    }
  }
  return true
}

// Without Data Structure
function isUnique(str) {
  let arr = str.split('').sort()
  for(let i = 0; i < arr.length - 1; i++) {
    if(arr[i] === arr[i + 1]) {
      return false
    }
  }
  return true
}