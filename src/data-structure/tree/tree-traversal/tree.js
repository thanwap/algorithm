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
}
