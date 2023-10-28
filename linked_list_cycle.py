head = [3,2,0,-4]
pos = 1


def has_cycle():

    hashSet = set()
    while head:
        if head in hashSet:
            return True
        hashSet.add(head)
        head = head.next
    return False
``