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
  set(index, val) {
    let node = this.get(index);
    if (!node) {
      return false;
    }
    node.val = val;
    return true;
  }
  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    if (index < 0 || index > this.length) {
      return false;
    }

    let leftNode = this.get(index - 1);
    let rightNode = this.get(index);

    leftNode.next = new Node(val);
    leftNode.next.next = rightNode;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }

    let prev = this.get(index - 1);
    let toRemove = prev.next;
    prev.next = toRemove.next;
    toRemove.next = null;
    this.length--;

    return toRemove;
  }
  reverse() {
    if (this.length <= 1) {
      return;
    }

    let newTail = this.head;
    let current = this.head;

    let left;
    while (current) {
      let nextNode = current.next;

      if (left) {
        current.next = left;
      }

      left = current;
      current = nextNode;
    }

    this.head = left;
    this.tail = newTail;
  }
}
