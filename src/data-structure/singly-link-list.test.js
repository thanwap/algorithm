import { SinglyLinkList } from './singly-link-list';

test('should get empty list when create new list', () => {
  let list = new SinglyLinkList();
  expect(list.length).toBe(0);
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
});

test('should add head and tail when push first node', () => {
  let list = new SinglyLinkList();
  list.push(1);
  expect(list.length).toBe(1);
  expect(list.head).toBe(list.tail);
  expect(list.head.val).toBe(1);
});

test('should add new node when push node that is second node', () => {
  let list = new SinglyLinkList();
  list.push(1);
  list.push(2);
  expect(list.head.val).toBe(1);
  expect(list.head.next.val).toBe(2);
  expect(list.tail.val).toBe(2);
});

test('should add new node when push node that is more than second node', () => {
  let list = new SinglyLinkList();
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);

  expect(list.head.val).toBe(1);
  expect(list.head.next.val).toBe(2);
  expect(list.head.next.next.val).toBe(3);
  expect(list.head.next.next.next.val).toBe(4);
  expect(list.tail.val).toBe(4);
});
