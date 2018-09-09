function findClosestValueInBST(tree, target) {
  let closest = Infinity
  let current = tree
  while(current !== null) {
    if(Math.abs(target-closest) > Math.abs(target - current.value)) {
      closest = current.value
    }
    if(target < current.value) {
      current = current.left
    } else if(target > current.value) {
      current = current.right
    } else {
      break;
    }
  }
  return current
}