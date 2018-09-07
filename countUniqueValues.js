//O(n) time O(1) space
function countUniqueValues(array) {
  let i = 0

  for(let j = 1; j < array.length; j++) {
    if(array[i] !== array[j]) {
      array[i + 1] = array[j]
      i += 1
    }
  }

  return i + 1
}


//ES6 new Set solution
function countUniqueValues(array) {
  return new Set(array).size
}