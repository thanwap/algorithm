import { BinarySearchTree } from './binary-search-tree';

describe('insert', () => {
  it('should insert and return tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.insert(5)).toEqual(tree);
  });

  it('should insert to root when tree is empty', () => {
    let tree = new BinarySearchTree();
    tree.insert(5);
    expect(tree.root.val).toBe(5);
  });

  it('should insert to the left when val less than current node and current node have no left ', () => {
    let tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(2);
    expect(tree.root.left.val).toBe(2);
  });

  it('should insert to the right when val greter than current node and current node have no right ', () => {
    let tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(7);
    expect(tree.root.right.val).toBe(7);
  });

  it('should insert to the left of lastest node ', () => {
    let tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    expect(tree.root.left.left.val).toBe(1);
  });

  it('should insert to the right of lastest node ', () => {
    let tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(6);
    tree.insert(7);
    expect(tree.root.right.right.val).toBe(7);
  });

  it('should insert to right position', () => {
    let tree = new BinarySearchTree();
    tree.insert(5);
    expect(tree.root.val).toBe(5);
    tree.insert(7);
    expect(tree.root.right.val).toBe(7);
    tree.insert(8);
    expect(tree.root.right.right.val).toBe(8);
    tree.insert(3);
    expect(tree.root.left.val).toBe(3);
    tree.insert(4);
    expect(tree.root.left.right.val).toBe(4);
    tree.insert(6);
    expect(tree.root.right.left.val).toBe(6);
    tree.insert(9);
    expect(tree.root.right.right.right.val).toBe(9);
  });
});
