root = []

def invertTree():
    if not root:
        return None

    tmp = root.left
    root.left = root.right
    root.right = tmp
    self.invertTree(root.left)
    self.invertTree(root.right)