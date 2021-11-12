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

describe('find', () => {
  it('should found root', () => {
    let tree = new BinarySearchTree();
    tree.insert(5);
    expect(tree.find(5).val).toBe(5);
  });

  it('should found right of the root', () => {
    let tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(6);
    expect(tree.find(6).val).toBe(6);
  });

  it('should found right of the root', () => {
    let tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(4);
    expect(tree.find(4).val).toBe(4);
  });

  it('should found node', () => {
    let tree = new BinarySearchTree();
    tree.insert(5).insert(7).insert(8).insert(3).insert(4).insert(6).insert(9);
    expect(tree.find(5).val).toBe(5);
    expect(tree.find(7).val).toBe(7);
    expect(tree.find(8).val).toBe(8);
    expect(tree.find(3).val).toBe(3);
    expect(tree.find(4).val).toBe(4);
    expect(tree.find(6).val).toBe(6);
    expect(tree.find(9).val).toBe(9);
  });

  it('should reutrn null when not found', () => {
    let tree = new BinarySearchTree();
    tree.insert(5).insert(7).insert(8).insert(3).insert(4).insert(6).insert(9);
    expect(tree.find(11)).toBe(null);
  });
});
