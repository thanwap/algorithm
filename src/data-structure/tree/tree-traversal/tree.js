export default class Tree {
  constructor() {
    this.root = null;
  }
  breathFirstSearch() {
    let queue = [this.root];
    let visited = [];
    let cur;

    while (queue.length > 0) {
      cur = queue.shift();

      if (!cur) {
        continue;
      }

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
