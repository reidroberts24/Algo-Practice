'''Given the head of a linked list, remove the nth node from the end of the list and return its head.
'''

head = [1,2,3,4,5] 
n = 2

class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


def remove_nth_from_end(head):
    
    traveler = head
    prev = None

    while head and head.next:
        prev = head
        temp = head.next.next

        head = head.next
        head.next = prev
