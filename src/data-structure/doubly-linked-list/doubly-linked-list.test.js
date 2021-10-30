import { DoublyLinkdList } from './doubly-linked-list';

describe('doubly linked list', () => {
  let list = new DoublyLinkdList();

  afterEach(() => {
    list = new DoublyLinkdList();
  });

  describe('push', () => {
    test('should add an item to the head of the list', () => {
      const res = list.push(1);
      expect(res.length).toBe(1);
      expect(res.head).toEqual(res.tail);
      expect(res.head.val).toBe(1);
      expect(res.head.prev).toBe(null);
    });

    test('should add an item to the next after the head item', () => {
      const res = list.push(1).push(2);
      expect(res.length).toBe(2);
      expect(res.head.val).toBe(1);
      expect(res.head.next.val).toEqual(2);
      expect(res.tail.prev.val).toEqual(1);
    });

    test('should add an item to the next after the tail item', () => {
      const res = list.push(1).push(2).push(3);
      expect(res.length).toBe(3);
      expect(res.head.val).toBe(1);
      expect(res.head.next.val).toBe(2);
      expect(res.head.next.next.val).toBe(3);
      expect(res.head.next.next.next).toBe(null);

      expect(res.tail.val).toBe(3);
      expect(res.tail.prev.val).toBe(2);
      expect(res.tail.prev.prev.val).toBe(1);
      expect(res.tail.prev.prev).toEqual(res.head);

      expect(res.tail.prev.prev.prev).toBe(null);
    });
  });

  describe('pop', () => {
    it('should remove and return tail item from list', () => {
      const res = list.push(1).push(2).push(3).pop();
      expect(res.val).toBe(3);
      expect(list.length).toBe(2);
      expect(list.tail.val).toBe(2);
      expect(list.tail.next).toBe(null);
    });

    it('should remove and return tail item from list when have two item', () => {
      const res = list.push(1).push(2).pop();
      expect(res.val).toBe(2);
      expect(list.length).toBe(1);
      expect(list.head).toEqual(list.tail);
      expect(list.tail.val).toBe(1);
      expect(list.tail.next).toBe(null);
    });

    it('should remove and return tail item from list when have one item', () => {
      const res = list.push(1).pop();
      expect(res.val).toBe(1);
      expect(list.length).toBe(0);
      expect(list.tail).toBe(null);
      expect(list.head).toBe(null);
    });

    it('should return undefined when remove empty list', () => {
      const res = list.pop();
      expect(res).toBe(undefined);
      expect(list.length).toBe(0);
      expect(list.tail).toBe(null);
      expect(list.head).toBe(null);
    });

    it('should set prev of removed item to null', () => {
      const res = list.push(1).push(2).push(3).pop();
      expect(res.prev).toBe(null);
    });
  });

  describe('shift', () => {
    it('should remove and return first item from list', () => {
      const res = list.push(1).push(2).push(3).shift();
      expect(res.val).toBe(1);
      expect(list.length).toBe(2);
      expect(list.head.val).toBe(2);
      expect(list.head.prev).toBe(null);
      expect(list.head.next.val).toBe(3);
    });

    it('should remove and return first item from list when have two item', () => {
      const res = list.push(1).push(2).shift();
      expect(res.val).toBe(1);
      expect(list.length).toBe(1);
      expect(list.head).toEqual(list.tail);
      expect(list.head.prev).toEqual(null);
      expect(list.tail.val).toBe(2);
      expect(list.tail.next).toBe(null);
    });

    it('should remove and return head item from list when have one item', () => {
      const res = list.push(1).shift();
      expect(res.val).toBe(1);
      expect(list.length).toBe(0);
      expect(list.tail).toBe(null);
      expect(list.head).toBe(null);
    });

    it('should return undefined when remove empty list', () => {
      const res = list.shift();
      expect(res).toBe(undefined);
      expect(list.length).toBe(0);
      expect(list.tail).toBe(null);
      expect(list.head).toBe(null);
    });

    it('should set next of removed item to null', () => {
      const res = list.push(1).push(2).push(3).shift();
      expect(res.next).toBe(null);
    });
  });

  describe('unshift', () => {
    it('should add item to head and return list', () => {
      const res = list.push(1).push(2).unshift(0);
      expect(res.head.val).toBe(0);
      expect(res.length).toBe(3);
      expect(res.head.next.val).toBe(1);
      expect(res.head.next.prev).toEqual(res.head);
      expect(res.head.next.next.val).toBe(2);
      expect(res.head.next.next).toEqual(res.tail);
    });

    it('should add item to head and return list when list have one item', () => {
      const res = list.push(1).unshift(0);
      expect(res.head.val).toBe(0);
      expect(res.length).toBe(2);
      expect(res.head.next).toEqual(res.tail);
      expect(res.tail.prev).toEqual(res.head);
    });

    it('should add item to head and return list when list is empty', () => {
      const res = list.unshift(0);
      expect(res.head.val).toBe(0);
      expect(res.length).toBe(1);
      expect(res.head.next).toBe(null);
      expect(res.head).toEqual(res.tail);
    });
  });

  describe('get', () => {
    it('should return head when get index of 0', () => {
      const res = list.push(1).push(2).push(3).push(4).get(0);
      expect(res.val).toBe(1);
    });

    it('should return tail when get last index of items', () => {
      const res = list.push(1).push(2).push(3).push(4).get(3);
      expect(res.val).toBe(4);
    });

    it('should return item of the index of the list when start from head', () => {
      const res = list.push(1).push(2).push(3).push(4).get(1);
      expect(res.val).toBe(2);
    });

    it('should return item of the index of the list when start from tail', () => {
      const res = list.push(1).push(2).push(3).push(4).get(2);
      expect(res.val).toBe(3);
    });

    it('should return item when founded', () => {
      list.push(1);
      expect(list.get(0).val).toBe(1);
    });

    it('should return null when not found', () => {
      list.push(1);
      expect(list.get(1)).toBe(null);
    });

    it('should return null when list is empty', () => {
      expect(list.get(0)).toBe(null);
      expect(list.get(1)).toBe(null);
      expect(list.get(5)).toBe(null);
    });
  });

  describe('set', () => {
    it('should set val and return true', () => {
      var res = list.push(1).set(0, 99);
      expect(res).toBe(true);
      expect(list.get(0).val).toBe(99);
    });

    it('should not set val and return false when not found', () => {
      var res = list.push(1).set(1, 99);
      expect(res).toBe(false);
      expect(list.get(0).val).toBe(1);
    });
  });
});
