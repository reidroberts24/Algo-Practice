import math
head = [1, 2, 3, 4, 5, 6]

'''
def reorder_list(head):
    mid = math.ceil(len(head)/2)
    first_half = head[:mid]
    second_half = head[mid:]
    res = []

    for i in range(len(first_half)):
    
        res.append(first_half[i])
        if second_half:
            res.append(second_half[-1])
            second_half.pop()
    return res

print(reorder_list(head))
'''

