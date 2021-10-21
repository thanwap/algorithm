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
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let prev;

    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
      this.length--;
      return current;
    }

    while (current.next) {
      prev = current;
      current = current.next;
    }

    prev.next = null;
    this.tail = prev;
    this.length--;

    return current;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }

    let oldHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;

    if (this.length === 1) {
      this.tail = this.head;
    }

    return this;
  }
  get(index) {
    let current = this.head;
    let counter = 0;

    while (current) {
      if (counter === index) {
        return current;
      }
      current = current.next;
      counter++;
    }

    return undefined;
  }
}
