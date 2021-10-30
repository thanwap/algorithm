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
  });
});
