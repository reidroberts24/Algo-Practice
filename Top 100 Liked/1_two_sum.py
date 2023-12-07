
def two_sum(nums, target):
    if len(nums) == 2:
        return [0,1]
    
    hashset = {}
    for i in range(len(nums)):
        if nums[i] in hashset.keys():
            return [hashset[nums[i]], i]

        difference = target - nums[i]
        hashset[difference] = i

nums = [2,7,11,15]
target = 9
print(two_sum(nums, target))

nums = [3,2,4]
target = 6
print(two_sum(nums, target))

nums = [3,3]
target = 6
print(two_sum(nums, target))
