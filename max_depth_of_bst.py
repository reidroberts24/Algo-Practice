

def maxDepth(root):

    if not root:
        return None
    
    return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))

