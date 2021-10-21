import { SinglyLinkList } from './singly-link-list';

describe('push', () => {
  it('should get empty list when create new list', () => {
    let list = new SinglyLinkList();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('should should return list', () => {
    let list = new SinglyLinkList();
    let res = list.push(1);
    expect(res.head.val).toBe(1);
  });

  it('should add head and tail when push first node', () => {
    let list = new SinglyLinkList();
    list.push(1);
    expect(list.length).toBe(1);
    expect(list.head).toBe(list.tail);
    expect(list.head.val).toBe(1);
  });

  it('should add new node when push node that is second node', () => {
    let list = new SinglyLinkList();
    list.push(1);
    list.push(2);
    expect(list.head.val).toBe(1);
    expect(list.head.next.val).toBe(2);
    expect(list.tail.val).toBe(2);
  });

  it('should add new node when push node that is more than second node', () => {
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
});

describe('pop', () => {
  it('should get empty list when have empty', () => {
    let list = new SinglyLinkList();
    let res = list.pop();
    expect(res.length).toBe(0);
    expect(res.head).toBe(null);
    expect(res.tail).toBe(null);
  });

  it('should get empty list when have one item', () => {
    let list = new SinglyLinkList();
    list.push(1);
    let res = list.pop();
    expect(res.length).toBe(0);
    expect(res.head).toBe(null);
    expect(res.tail).toBe(null);
  });

  it('should get one item in list when have two items', () => {
    let list = new SinglyLinkList();
    list.push(1).push(2);
    let res = list.pop();
    expect(res.length).toBe(1);
    expect(res.head).toBe(res.tail);
    expect(res.head.val).toBe(1);
  });

  it('should get two items in list when have three items', () => {
    let list = new SinglyLinkList();
    list.push(1).push(2).push(3);
    let res = list.pop();
    expect(res.length).toBe(2);
    expect(res.head.val).toBe(1);
    expect(res.tail.val).toBe(2);
  });
});
