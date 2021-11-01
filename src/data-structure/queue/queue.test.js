import { Queue } from './queue';

describe('queue', () => {
  let q = new Queue();

  afterEach(() => {
    q = new Queue();
  });

  describe('enqueue', () => {
    test('should set first and last to new item', () => {
      let res = q.eneuqeue(1);
      expect(res.first).toEqual(res.last);
      expect(res.first.val).toEqual(1);
      expect(res.size).toBe(1);
    });
    test('should set item to first when queue have more than one item', () => {
      let res = q.eneuqeue(1).eneuqeue(2).eneuqeue(3);
      expect(res.first.val).toBe(1);
      expect(res.first.next.val).toBe(2);
      expect(res.first.next.next.val).toBe(3);
      expect(res.size).toBe(3);
    });
  });

  describe('dequeue', () => {
    test('should remove and return first item', () => {
      q.eneuqeue(1).eneuqeue(2).eneuqeue(3);
      expect(q.dequeue().val).toBe(1);
      expect(q.size).toBe(2);
      expect(q.dequeue().val).toBe(2);
      expect(q.size).toBe(1);
      expect(q.first).toEqual(q.last);
      expect(q.dequeue().val).toBe(3);
      expect(q.size).toBe(0);
      expect(q.first).toBe(null);
      expect(q.last).toBe(null);
    });
  });
});
