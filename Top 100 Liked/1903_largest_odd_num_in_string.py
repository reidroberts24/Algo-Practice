number = '420162'

def largest_odd_num(num):
    length = len(num)
    if length == 0:
        return ""
    
    if int(num[length - 1]) % 2 == 1:
        return num

    is_odd_num = False
    index = length - 1

    while not is_odd_num and index >= 0:
        current = int(num[index])
        if current % 2 == 1:
            is_odd_num = True
        else:
            index -= 1
    return num[:index + 1] if is_odd_num else ""

print(largest_odd_num(number))
