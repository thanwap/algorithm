import { DoublyLinkdList } from './doubly-linked-list';

describe('push', () => {
  let list = new DoublyLinkdList();

  afterEach(() => {
    list = new DoublyLinkdList();
  });

  test('should add an item to the head of the list', () => {
    let res = list.push(1);
    expect(res.length).toBe(1);
    expect(res.head).toEqual(res.tail);
    expect(res.head.val).toBe(1);
    expect(res.head.prev).toBe(null);
  });

  test('should add an item to the next after the head item', () => {
    let res = list.push(1).push(2);
    expect(res.length).toBe(2);
    expect(res.head.val).toBe(1);
    expect(res.head.next.val).toEqual(2);
    expect(res.tail.prev.val).toEqual(1);
  });

  test('should add an item to the next after the tail item', () => {
    let res = list.push(1).push(2).push(3);
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
