import { Stack } from './stack';

describe('stack', () => {
  let stack = new Stack();
  afterEach(() => {
    stack = new Stack();
  });
  describe('push', () => {
    it('should set first and last to new item when stack is empty', () => {
      let res = stack.push(1);
      expect(res.first).toEqual(res.last);
      expect(res.size).toBe(1);
    });

    it('should set new item to first when stack is not empty', () => {
      stack.push(1).push(2).push(3);
      expect(stack.first.val).toBe(3);
      expect(stack.first.next.val).toBe(2);
      expect(stack.first.next.next.val).toBe(1);
      expect(stack.last.val).toBe(1);
      expect(stack.size).toBe(3);
    });
  });
  describe('pop', () => {
    it('should remove first item and set new item to next', () => {
      stack.push(1).push(2).push(3);
      let popedItem = stack.pop();
      expect(popedItem.val).toBe(3);
      expect(popedItem.next).toBe(null);
      expect(stack.first.val).toBe(2);
      expect(stack.size).toBe(2);

      popedItem = stack.pop();
      expect(popedItem.val).toBe(2);
      expect(popedItem.next).toBe(null);
      expect(stack.first.val).toBe(1);
      expect(stack.size).toBe(1);

      popedItem = stack.pop();
      expect(popedItem.val).toBe(1);
      expect(popedItem.next).toBe(null);
      expect(stack.size).toBe(0);
      expect(stack.first).toBe(null);
      expect(stack.last).toBe(null);

      popedItem = stack.pop();
      expect(popedItem).toBe(undefined);
      expect(stack.size).toBe(0);
    });
  });
});
