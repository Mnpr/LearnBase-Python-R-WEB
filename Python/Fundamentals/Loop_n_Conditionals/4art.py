##using both for and while loop
#for i in range(1,10):
#    print("*"*i)


#x = 1
#while x <= 12:
#    print("#"*x)
#    x += 1

#combination both without string multiplication

for i in range(1,11):
    count = 1
    smiley = ""
    while count < i:
        smiley += "#"
        count +=1
    print(smiley)