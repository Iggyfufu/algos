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

function returnKthToLast(head, num) {

  let previous = null
  while (head !== null) {
    const next = head.next
    head.next = previous
    previous = head
    head = next
  }

  let trav = previous
  let count = 1
  while (trav !== null) {
    if (count === num) {
      return trav.val
    } else {
      trav = trav.next
      count += 1
    }
  }
  return null
}

returnKthToLast(linkedList, 10)
returnKthToLast(linkedList, 3)