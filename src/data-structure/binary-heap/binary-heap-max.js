export class BinaryHeapMax {
  items = [];
  constructor(items) {
    this.items = items;
  }

  add(item) {
    this.items.push(item);
    let cur = this.items.length - 1;
    let parent = this.getParentIndex(cur);

    let temp;
    while (this.items[parent] < this.items[cur]) {
      temp = this.items[parent];
      this.items[parent] = this.items[cur];
      this.items[cur] = temp;
      cur = parent;
      parent = this.getParentIndex(cur);
    }

    return this.items;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
}
