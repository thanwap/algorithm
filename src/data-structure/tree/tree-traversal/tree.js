export default class Tree {
  constructor() {
    this.root = null;
  }
  breathFirstSearch() {
    if (this.root === null) {
      return [];
    }

    let queue = [this.root];
    let visited = [];
    let cur;

    while (queue.length > 0) {
      cur = queue.shift();
      visited.push(cur.val);

      if (cur.left) {
        queue.push(cur.left);
      }

      if (cur.right) {
        queue.push(cur.right);
      }
    }

    return visited;
  }
  depthFirstSearchPreOrder() {
    if (this.root === null) {
      return [];
    }

    const visited = [];

    const callChild = (node) => {
      visited.push(node.val);

      if (node.left) {
        callChild(node.left);
      }

      if (node.right) {
        callChild(node.right);
      }
    };

    callChild(this.root);

    return visited;
  }
  /*
     10
    6   15
  3  8    20*/
  // [3 8 6 20 15 10]
  depthFirstSearchPostOrder() {
    if (this.root === null) {
      return [];
    }

    const visited = [];

    const callChild = (node) => {
      if (node.left) {
        callChild(node.left);
      }

      if (node.right) {
        callChild(node.right);
      }

      visited.push(node.val);
    };

    callChild(this.root);

    return visited;
  }
  depthFirstSearchInOrder() {
    if (this.root === null) {
      return [];
    }

    const visited = [];

    const callChild = (node) => {
      if (node.left) {
        callChild(node.left);
      }

      visited.push(node.val);

      if (node.right) {
        callChild(node.right);
      }
    };

    callChild(this.root);

    return visited;
  }
}
