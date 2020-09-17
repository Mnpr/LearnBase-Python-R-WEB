#for item in iterable_object:
    #do sometining
    
#iterable_object is something that can be iterate over
#item is new variable which references the current position of iterator within iterables

for i in range(1,10):
    print(i)
    print(i*i)
    
for j in "Zombie":
    print(j*10)
    print("")
    
for i in range(10,0,-2):
    print(i)
    print(i*i)


#range(7) = 0-6
#range(1,8) = 1-7
#range(1,10,2) = odd from 1-10 
#last parameter is called step = how many to skip or which way to count (+ or -)
#range(1,10,-1) = (10 - 1)

#sum of odd numbers form 10 -20(INCLUSIVE)
#solution using step range
x=0
for number in range(11,20,2):
    x += number
print(x)

#or solution using conditional 
#x=0
#for n in range(10,20):
#    if n%2 !== 0:
#        x += n