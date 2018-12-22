const sortByOrder = (a, b) => a.order - b.order

class MinHeap {
  constructor(compare) {
    this._compare = compare
    this._heapArray = []
  }
  size() {
    return this._heapArray.length
  }
  insert(value) {
    this._heapArray.push(value)
    MinHeap.bubble(this._heapArray, this._compare)
  }
  delete() {
    if (this._heapArray.length <= 1) {
      this._heapArray.length = 0
      return
    }
    this._heapArray[0] = this._heapArray.pop()
    MinHeap.sink(this._heapArray, this._compare)
  }
  peek() {
    return this._heapArray[0]
  }
  replace(value) {
    this._heapArray[0] = value
    MinHeap.sink(this._heapArray, this._compare)
  }

  static swap(array, index1, index2) {
    const temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
  }
  static bubble(heapArray, compare) {
    let index = heapArray.length - 1
    while (true) {
      const parentIndex = parseInt((index - 1) / 2)
      if (compare(heapArray[index], heapArray[parentIndex]) >= 0) {
        break
      }
      MinHeap.swap(heapArray, index, parentIndex)
      index = parentIndex
    }
  }
  static sink(heapArray, compare) {
    let index = 0
    while (index < heapArray.length) {
      const left = index * 2 + 1
      const right = left + 1
      if (left >= heapArray.length) {
        break
      }
      const minIndex = right === heapArray.length || compare(heapArray[left], heapArray[right]) <= 0 ? left : right
      if (compare(heapArray[index], heapArray[minIndex]) <= 0) {
        break
      }
      MinHeap.swap(heapArray, index, minIndex)
      index = minIndex
    }
  }
}

class SortedIterator {
  constructor(arrays, canSkip) {
    this._heap = new MinHeap(sortByOrder)
    arrays.filter(array => array.length)
      .map(array => ({array, index: 0, order: array[0].order}))
      .forEach(desc => this._heap.insert(desc))
    this._canSkip = canSkip
    console.log(this)
  }
  next() {
    const {_heap, _canSkip} = this
    if (!_heap.size()) {
      return {value: undefined, done: true}
    }
    const desc = _heap.peek()
    let {array, index} = desc

    const ret = _canSkip(array[index]) ? null : {value: array[index], done: false}

    do {
      index += 1
    } while (index < array.length && _canSkip(array[index]))
    if (index === array.length) {
      _heap.delete()
    } else {
      desc.index = index
      desc.order = array[index].order
      _heap.replace(desc)
    }
    return ret || this.next()
  }
}


function gen(...orders) {
  return orders.map(order => ({order}))
}
var arr = [
  gen(0,1,6,7,9,11,15),
  gen(2,3,8,13,16,21,24),
  gen(4,5,10,14,27,31),
  gen(17,19,22)
]

const set = new Set()
arr.forEach(a => a.forEach(x => {
  if (set.has(x.order)) {
    throw new Error('duplicate ' + x.order)
  }
  set.add(x.order)
}))

var res = 0
function test() {
  var it = new SortedIterator(arr, _ => false)
  while (true) {
    // console.log(it._heap._heapArray.slice().map(x => x.order))
    const {value, done} = it.next()
    if (done) {
      break
    }
    res += value.order
  }
}

function test2() {
  arr.flat().sort((a, b) => a.order - b.order).forEach(x => res += x.order)
}

function run() {
  console.time('a')
  test()
  console.timeEnd('a')
}

function run2() {
  console.time('b')
  test2()
  console.timeEnd('b')
}

for (let i = 0; i < 10; i++) {
  run()
  run2()
}


