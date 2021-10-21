import { Node } from './node';

export class SinglyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.head === null) {
      return this;
    }

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
      this.length--;
      return this;
    }

    let current = this.head;
    let prev;

    while (current && current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;

    return this;
  }
}
