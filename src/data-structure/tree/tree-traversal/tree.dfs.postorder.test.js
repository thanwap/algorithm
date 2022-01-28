import Tree from './tree';
import { Node } from '../node';

describe('dfs post order', () => {
  it('should return visited order by the method of the traversal', () => {
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

    const res = tree.depthFirstSearchPostOrder();
    expect(res).toStrictEqual([3, 8, 6, 20, 15, 10]);
  });

  it('should return empty when tree is not have a node', () => {
    const tree = new Tree();

    const res = tree.depthFirstSearchPostOrder();
    expect(res).toStrictEqual([]);
  });
});
