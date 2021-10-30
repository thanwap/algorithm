import { Node } from './node';

export class DoublyLinkdList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const removedItem = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    removedItem.prev = null;
    this.length--;

    return removedItem;
  }
  shift() {
    if (this.length === 0) {
      return undefined;
    }

    const removedItem = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    removedItem.next = null;
    this.length--;
    return removedItem;
  }
  unshift(val) {
    if (this.length === 0) {
      this.push(val);
      return this;
    }

    let newNode = new Node(val);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;
    return this;
  }
  get(index) {
    const startFromHead = index <= this.length / 2;
    let cur = startFromHead ? this.head : this.tail;
    let curIndex = startFromHead ? 0 : this.length - 1;
    while (cur) {
      if (curIndex === index) {
        return cur;
      }

      cur = startFromHead ? cur.next : cur.prev;
      curIndex = startFromHead ? curIndex + 1 : curIndex - 1;
    }
    return null;
  }
  set(index, val) {
    let item = this.get(index);
    if (!item) {
      return false;
    }
    item.val = val;
    return true;
  }
  insert(index, val) {
    if (this.length === 0 && index === 0) {
      this.unshift(val);
      return true;
    } else if (index === this.length - 1) {
      this.push(val);
      return true;
    }

    if (index < 0 || index >= this.length) {
      return false;
    }

    let newNode = new Node(val);
    let item = this.get(index + 1);
    newNode.next = item;
    newNode.prev = item.prev;
    item.prev.next = newNode;
    item.prev = newNode;

    this.length++;

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === this.length - 1) {
      return this.pop();
    } else if (index === 0) {
      return this.shift();
    }

    let removedItem = this.get(index);
    let left = removedItem.prev;
    let right = removedItem.next;
    left.next = right;
    right.prev = left;
    removedItem.next = null;
    removedItem.prev = null;
    this.length--;

    return removedItem;
  }
  reverse() {
    let cur = this.head;

    while (cur) {
      let tempNext = cur.next;
      cur.next = cur.prev;
      cur.prev = tempNext;
      cur = tempNext;
    }

    let oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;
  }
}
