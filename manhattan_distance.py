#Manhattan Distance Vectors
from math import sqrt
#custom manhattan_distance
def manhattan_distance(p1,p2):
    return sum(abs(r1-r2) for r1,r2 in zip(p1,p2))
#Practice Question 1
Point_1 = [1,2,3,4]
Point_2 = [6,7,8,9]
print("Point_1 = [1,2,3,4]\nPoint_2 = [6,7,8,9]")
dist = manhattan_distance(Point_1,Point_2)
print("The distance is",dist)
#Practice Question 2
Point_1 = [6,2,3,9]
Point_2 = [9,1,0,2]
print("Point_1 = [6,2,3,9]\nPoint_2 = [9,1,0,2]")
dist = manhattan_distance(Point_1,Point_2)
print("The distance is",dist)
#Practice Question 3
Point_1 = [3,4,1,4]
Point_2 = [6,7,9,5]
print("Point_1 = [3,4,1,4]\nPoint_2 = [6,7,9,5]")
dist = manhattan_distance(Point_1,Point_2)
print("The distance is",dist)