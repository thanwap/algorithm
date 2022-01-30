import { BinaryHeapMax } from './binary-heap-max';

describe('add item', () => {
  it('should at item to the last child when it less than all the parent', () => {
    const bh = new BinaryHeapMax([]);
    const result = bh.add(1);
    expect(result).toStrictEqual([1]);
  });

  fit('should swap with the parent when item is more than parent', () => {
    const bh = new BinaryHeapMax([1]);
    const result = bh.add(2);
    expect(result).toStrictEqual([2, 1]);
  });

  fit('should swap to the top of heap when item is more than all of the parent', () => {
    const bh = new BinaryHeapMax([41, 39, 33, 18, 27, 12]);
    const result = bh.add(55);
    expect(result).toStrictEqual([55, 39, 41, 18, 27, 12, 33]);
  });
});
