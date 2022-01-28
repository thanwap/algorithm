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
  /*
     10
    6   15
  3  8    20*/
  // [10 6 3 8 15 20]
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
}
