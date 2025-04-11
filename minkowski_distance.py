from math import sqrt
def minkowski_distance(a,b,p):
    return sum(abs(v1-v2)**p for v1,v2 in zip(a,b))**(1/p)
p1 = [2,3,4,1]
p2 = [4,1,4,6]
p = 2
print(" p1 = [2,3,4,1]\n p2 = [4,1,4,6]\n p = 2")
dist = minkowski_distance(p1,p2,p)
print("Distance = ",dist)
p1 = [6,2,1,0]
p2 = [9,1,4,8]
p = 3
print(" p1 = [6,2,1,0]\n p2 = [9,1,4,8]\n p = 3")
dist = minkowski_distance(p1,p2,p)
print("Distance = ",dist)
p1 = [3,4,9,4]
p2 = [6,7,2,6]
p = 4
print(" p1 = [2,3,4,1]\n p2 = [4,1,4,6]\n p = 2")
dist = minkowski_distance(p1,p2,p)
print("Distance = ",dist)