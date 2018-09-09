function insertionSort(array) {
  for(let i = 1; i < array.length; i++) {
    let j = i
    while(j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array)
      j--
    }
  }
  return array
}

function swap(idx1, idx2, array) {
  const temp = array[idx1]
  array[idx1] = array[idx2]
  array[idx2] = temp
}