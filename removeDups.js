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

function removeDups(head) {
  const seen = {}
  seen[head.val] = true

  console.log(seen)
  let current = head
  while (current.next !== null) {
    let value = current.next.val
    if (!seen[value]) {
      seen[value] = true
      current = current.next
    } else {
      current.next = current.next.next
      console.log(current.next)
    }
  }
  return head
}

removeDups(linkedList)