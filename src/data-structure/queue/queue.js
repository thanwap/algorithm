import { Node } from '../node';
export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  eneuqeue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this;
  }
  dequeue() {
    if (this.size === 0) {
      return null;
    }
    let removedItem = this.first;
    this.first = removedItem.next;
    if (this.size === 1) {
      this.last = null;
    }

    this.size--;
    removedItem.next = null;
    return removedItem;
  }
}
