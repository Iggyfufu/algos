class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max
  }

  bubbleDown() {
    let index = 0
    const element = this.values[index]
    const length = this.length
    while (index < length) {
      let lChildIndex = (index * 2) + 1
      let rChildIndex = (index * 2) + 2
      let swap = null
      let rChild, lChild;
      if (lChild < length) {
        lChild = this.values[lChildIndex];
        if (lChild > element) {
          swap = lChildIndex;
        }
      }
      if (rChild < length) {
        rChild = this.values[rChildIndex];
        if ((swap === null && rChild > element) || (swap !== null && rChild > lChild)) {
          swap = rChildIndex;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(30);
heap.insert(10);
heap.insert(31);
heap.insert(3);
heap.insert(199);
heap.insert(77);
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);