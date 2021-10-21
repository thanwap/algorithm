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
});
