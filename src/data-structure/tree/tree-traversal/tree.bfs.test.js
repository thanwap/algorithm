import Tree from './tree';
import { Node } from '../node';

describe('dfs', () => {
  it('should return data that order by horizontal(sibling)', () => {
    /*
     10
    6   15
  3  8    20
*/
    const tree = new Tree();
    tree.root = new Node(10);

    tree.root.left = new Node(6);
    tree.root.left.left = new Node(3);
    tree.root.left.right = new Node(8);

    tree.root.right = new Node(15);
    tree.root.right.right = new Node(20);

    const res = tree.breathFirstSearch();
    expect(res).toStrictEqual([10, 6, 15, 3, 8, 20]);
  });

  it('should return one item when tree has only root', () => {
    const tree = new Tree();
    tree.root = new Node(5);
    const res = tree.breathFirstSearch();

    expect(res).toStrictEqual([5]);
  });

  it('should return empty array when tree has no root', () => {
    const tree = new Tree();
    const res = tree.breathFirstSearch();

    expect(res).toStrictEqual([]);
  });
});
