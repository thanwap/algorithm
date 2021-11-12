import { Node } from './node';

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (current) {
      if (newNode.val < current.val) {
        if (!current.left) {
          current.left = newNode;
          current = null;
        } else {
          current = current.left;
        }
      } else if (newNode.val > current.val) {
        if (!current.right) {
          current.right = newNode;
          current = null;
        } else {
          current = current.right;
        }
      } else {
        current = null;
      }
    }

    return this;
  }
}
