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
  it('should get undefined when list is empty', () => {
    let list = new SinglyLinkList();
    const res = list.pop();
    expect(res).toBe(undefined);
  });

  it('should get empty list when have one item', () => {
    let list = new SinglyLinkList();
    list.push(1);
    const res = list.pop();
    expect(res.val).toBe(1);
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('should get one item in list when have two items', () => {
    let list = new SinglyLinkList();
    list.push(1).push(2);
    const res = list.pop();
    expect(res.val).toBe(2);
    expect(list.length).toBe(1);
    expect(list.head).toBe(list.tail);
    expect(list.head.val).toBe(1);
  });

  it('should get two items in list when have three items', () => {
    let list = new SinglyLinkList();
    list.push(1).push(2).push(3);
    const res = list.pop();
    expect(res.val).toBe(3);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(1);
    expect(list.tail.val).toBe(2);
  });

  it('should empty items in list when have three items and pop them all', () => {
    let list = new SinglyLinkList();
    list.push(1).push(2).push(3);
    list.pop();
    list.pop();
    list.pop();

    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
});

describe('shift', () => {
  it('should return undefined when list is empty', () => {
    let list = new SinglyLinkList();
    const res = list.shift();
    expect(res).toBe(undefined);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('should return first item and get empty list when list have one item', () => {
    let list = new SinglyLinkList();
    list.push(1);
    const res = list.shift();
    expect(res.val).toBe(1);
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  it('should return first item and get one item when list have two items', () => {
    let list = new SinglyLinkList();
    list.push(1).push(2);
    const res = list.shift();
    expect(res.val).toBe(1);
    expect(list.length).toBe(1);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(2);
  });

  it('should return first item and get two items when list have three items', () => {
    let list = new SinglyLinkList();
    list.push(1).push(2).push(3);
    const res = list.shift();
    expect(res.val).toBe(1);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(3);
  });

  it('should return undefined and get empty when shift them all', () => {
    let list = new SinglyLinkList();
    list.push(1).push(2).push(3);
    expect(list.shift().val).toBe(1);
    expect(list.shift().val).toBe(2);
    expect(list.shift().val).toBe(3);
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
});

describe('unshift', () => {
  it('should add val to head when list is empty', () => {
    let list = new SinglyLinkList();
    const res = list.unshift(1);
    expect(res.length).toBe(1);
    expect(res.head).toBe(res.tail);
    expect(res.head.val).toBe(1);
  });

  it('should add val to head when list have one item and so on....', () => {
    let list = new SinglyLinkList();
    list.push(1);
    const res = list.unshift(2);
    expect(res.length).toBe(2);
    expect(res.head.val).toBe(2);
    expect(res.tail.val).toBe(1);
    list.unshift(3);
    expect(res.head.val).toBe(3);
    expect(res.head.next.val).toBe(2);
    expect(res.tail.val).toBe(1);
  });
});

describe('get', () => {
  it('should get undefined when list is empty', () => {
    let list = new SinglyLinkList();
    var res = list.get(0);
    expect(res).toBe(undefined);
  });
  it('should get undefined when list find index not in list', () => {
    let list = new SinglyLinkList();
    list.push(1);
    var res = list.get(1);
    expect(res).toBe(undefined);
  });
  it('should get node when found index', () => {
    let list = new SinglyLinkList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);

    expect(list.get(0).val).toBe(1);
    expect(list.get(1).val).toBe(2);
    expect(list.get(2).val).toBe(3);
    expect(list.get(3).val).toBe(4);
  });
});

describe('set', () => {
  it('should return false when index not found', () => {
    let list = new SinglyLinkList();
    expect(list.set(0, 1)).toBe(false);
    list.push(1);
    expect(list.set(1, 2)).toBe(false);
    expect(list.set(1, 3)).toBe(false);
    expect(list.head.val).toBe(1);
  });
  it('should return true and set value when index found', () => {
    let list = new SinglyLinkList();
    list.push(1);
    list.push(2);
    expect(list.set(0, 1.5)).toBe(true);
    list.head.val = 1.5;
    expect(list.set(1, 2.5)).toBe(true);
    list.head.next.val = 2.5;
  });
});

describe('insert', () => {
  it('should return false when index not found', () => {
    let list = new SinglyLinkList();
    expect(list.insert(1, 1)).toBe(false);
    list.push(2);
    expect(list.insert(2, 1)).toBe(false);
    expect(list.insert(-2, 1)).toBe(false);
  });

  it('should return true and insert to head when index is zero', () => {
    let list = new SinglyLinkList();
    expect(list.insert(0, 1)).toBe(true);
    expect(list.insert(0, 2)).toBe(true);
    expect(list.head.val).toBe(2);
  });

  it('should return true and insert node before index node when index found', () => {
    let list = new SinglyLinkList();
    expect(list.insert(0, 1)).toBe(true);
    expect(list.head.val).toBe(1);
    expect(list.insert(0, 2)).toBe(true);
    expect(list.head.val).toBe(2);
    expect(list.tail.val).toBe(1);
    expect(list.insert(1, 1.5)).toBe(true);
    expect(list.head.val).toBe(2);
    expect(list.head.val).toBe(2);
    expect(list.head.next.val).toBe(1.5);
    expect(list.tail.val).toBe(1);
  });

  it('should return true the end of the list when index equal list length', () => {
    let list = new SinglyLinkList();
    list.push(1).push(2).push(3);
    expect(list.insert(3, 4)).toBe(true);
    expect(list.tail.val).toBe(4);
  });
});

describe('remove', () => {
  let list = new SinglyLinkList();

  beforeEach(() => {
    list.push(1).push(2).push(3);
  });

  afterEach(() => {
    list = new SinglyLinkList();
  });

  it('should return undefined when index is less than equal zero', () => {
    expect(list.remove(-1)).toBe(undefined);
  });

  it('should return undefined when index is more than equal length', () => {
    expect(list.remove(3)).toBe(undefined);
  });

  it('should shift when index is zero', () => {
    const removed = list.remove(0);
    expect(removed.val).toBe(1);
    expect(list.length).toBe(2);
  });

  it('should pop when index is last item', () => {
    const removed = list.remove(2);
    expect(removed.val).toBe(3);
    expect(list.length).toBe(2);
  });

  it('should pop when index is last item', () => {
    const removed = list.remove(2);
    expect(removed.val).toBe(3);
    expect(list.length).toBe(2);
  });

  it('should remove item of index', () => {
    const removed = list.remove(1);
    expect(removed.val).toBe(2);
    expect(list.length).toBe(2);
    expect(list.head.val).toBe(1);
    expect(list.head.next.val).toBe(3);
    expect(list.tail.val).toBe(3);
  });
});

describe('reverse', () => {
  let list = new SinglyLinkList();

  afterEach(() => {
    list = new SinglyLinkList();
  });

  it('should do nothing when length is zero', () => {
    const res = list.reverse();
    expect(list.length).toBe(0);
    expect(list.head).toBe(null);
    expect(res).toEqual(list);
  });

  it('should do nothing when length is one', () => {
    const res = list.reverse();
    list.push(1);
    list.reverse();
    expect(list.length).toBe(1);
    expect(list.head).toEqual(list.tail);
    expect(res).toEqual(list);
  });

  it('should reverse item in list of 2 itmes', () => {
    list.push(1).push(2);
    const res = list.reverse();
    expect(list.head.val).toBe(2);
    expect(list.head.next.val).toBe(1);
    expect(list.tail.val).toBe(1);
    expect(res).toEqual(list);
  });

  it('should reverse item in list of 3 items', () => {
    list.push(1).push(2).push(3);
    list.reverse();
    expect(list.head.val).toBe(3);
    expect(list.head.next.val).toBe(2);
    expect(list.head.next.next.val).toBe(1);
    expect(list.tail.val).toBe(1);
  });

  it('should reverse item in list of 4 items', () => {
    list.push(1).push(2).push(3).push(4);
    list.reverse();
    expect(list.head.val).toBe(4);
    expect(list.head.next.val).toBe(3);
    expect(list.head.next.next.val).toBe(2);
    expect(list.head.next.next.next.val).toBe(1);
    expect(list.tail.val).toBe(1);
  });
});
