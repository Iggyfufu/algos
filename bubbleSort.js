function bubbleSort(array) {
  let isSorted = false
  while (!isSorted) {
    let counter = 0
    isSorted = true
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array)
        isSorted = false
      }
    }
    counter++
  }
}

function swap(idx1, idx2, array) {
  const temp = array[idx1]
  array[idx1] = array[idx2]
  array[idx2] = temp
}