const linkedList = {
  val: 10,
  next: {
    val: 5,
    next: {
      val: 24,
      next: {
        val: 15,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}

function deleteMiddleNode(node) {
  if (node === null || node.next === null) return false

  const next = node.next
  node.val = next.val
  node.next = next.next

  return true

}

const n = linkedList.next.next

deleteMiddleNode(n)

console.log(linkedList)
