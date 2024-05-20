class Node {
  constructor(value) {
    this.value = value || null,
      this.nextNode = null;
  };
};

class LinkedList {
  constructor() {
    this.listHeader = null;
  }

  prepend(value) {
    let temp = null
    if (this.listHeader != null) temp = this.listHeader;
    this.listHeader = new Node(value)
    this.listHeader.nextNode = temp
  }

  append(value) {
    if (this.listHeader == null) this.prepend(value)
    else {
      let temp = this.listHeader
      while (temp.nextNode != null) {
        temp = temp.nextNode
      }
      temp.nextNode = new Node(value)
    }
  }

  size() {
    let count = 0
    let temp = this.listHeader
    while (temp != null) {
      count++
      temp = temp.nextNode
    }
    return count
  }

  head() {
    return this.listHeader.value
  }

  tail() {
    let temp = this.listHeader
    while (temp.nextNode != null) {
      temp = temp.nextNode
    }
    return temp.value
  }

  atIndex(index) {
    let temp = this.listHeader
    for (let i = 0; i < index; i++) temp = temp.nextNode;
    return temp.value
  }

  pop() {
    let current = this.listHeader, previous = null
    while (current.nextNode != null) {
      previous = current
      current = current.nextNode
    }
    previous.nextNode = null
  }

  contains(value) {
    let temp = this.listHeader
    while (temp != null) {
      if (temp.value === value) return true
      temp = temp.nextNode
    }
    return false
  }

  find(value) {
    let temp = this.listHeader
    let index = 0
    while (temp != null) {
      if (temp.value === value) return `At index ${index}`
      temp = temp.nextNode
      index++
    }
    return null
  }

  toString() {
    let temp = this.listHeader
    let listString = ""
    while (temp != null) {
      listString += `( ${temp.value} ) -> `
      temp = temp.nextNode
    }
    return listString += null
  }

  insertAt(index, value) {
    if (this.listHeader == null) this.prepend(value)
    else {
      let current = this.listHeader, previous = null
      for (let i = 0; i < index; i++) {
        previous = current
        current = current.nextNode
        if (current == null) break // given index bigger than list length, adds node at end of list
      }
      let temp = new Node(value)
      previous.nextNode = temp
      temp.nextNode = current
    }
  }

  remove(index) {
    let current = this.listHeader, previous = null
    for (let i = 0; i < index; i++) {
      previous = current
      current = current.nextNode
      if (current == null) return "There is no such node"
    }
    previous.nextNode = current.nextNode
  }
};


let test1 = new LinkedList()
test1.append('initial')
test1.prepend('new-initial')
test1.append('at the end')
test1.append('m')
test1.insertAt(2, 'inserted-node')
console.log(test1.listHeader)

