'''Given the head of a linked list, remove the nth node from the end of the list and return its head.


leetcode solution
'''

head = [1,2,3,4,5] 
n = 2

class ListNode:
    def __init__(self, value, next=None):
        self.value = value
        self.next = None


def remove_nth_from_end(head):
    dummy = ListNode(0, head)
    left = dummy
    right = head
    while n > 0 and right:
        right = right.next
        n -= 1

    while right:
        left = left.next
        right = right.next
    
    left.next = left.next.next
