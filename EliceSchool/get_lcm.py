import math

n = input()

arr = n.split(' ')

n = int(arr[0])
m = int(arr[1])

print(math.lcm(n,m))