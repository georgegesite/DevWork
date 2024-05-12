class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
  
      if (!this.root) {
        this.root = newNode;
      } else {
        this._insertRecursive(this.root, newNode);
      }
    }
  
    _insertRecursive(node, newNode) {
      if (newNode.value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          this._insertRecursive(node.left, newNode);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          this._insertRecursive(node.right, newNode);
        }
      }
    }

    search(value) {
        return this._searchRecursive(this.root, value);
      }
      
      _searchRecursive(node, value) {
        if (node === null) {
          return null; // Value not found in the tree
        }
      
        if (value === node.value) {
          return node; // Value found, return the node itself
        } else if (value < node.value) {
          return this._searchRecursive(node.left, value); // Search in the left subtree
        } else {
          return this._searchRecursive(node.right, value); // Search in the right subtree
        }
      }
      

  }
  
  // Example usage:
  const binaryTree = new BinaryTree();
  binaryTree.insert(5);
  binaryTree.insert(3);
  binaryTree.insert(8);
  binaryTree.insert(1);
  binaryTree.insert(4);
  binaryTree.insert(7);
  binaryTree.insert(9);



  
  console.log(binaryTree);
  console.log(  binaryTree.search(5));