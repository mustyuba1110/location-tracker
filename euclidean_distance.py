
from math import sqrt
def euclidean_distance(a,b):
    return sqrt(sum((e1-e2)**2 for e1,e2 in zip(a,b)))
row1 = [2,3]
row2 = [4,1]
dist = euclidean_distance(row1,row2)
print("row1 = [2,3]")
print("row2 = [4,1]")
print("Euclidean Distance = ",dist)
row1 = [6,2]
row2 = [9,1]
dist = euclidean_distance(row1,row2)
print("row1 = [6,2]")
print("row2 = [9,1]")
print("Euclidean Distance = ",dist)
row1 = [3,4]
row2 = [6,7]
dist = euclidean_distance(row1,row2)
print("row1 = [3,4]")
print("row2 = [6,7]")
print("Euclidean Distance = ",dist)