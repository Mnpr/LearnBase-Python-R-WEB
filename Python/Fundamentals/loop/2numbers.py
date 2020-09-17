for i in range(1,21):
    if i == 4 or i == 13:
        print(str(i) + " is Unlucky")
    elif i%2 == 0:
        print(str(i) + " is even")
    else:
        print(str(i) + " is odd")
        
        
#for i in range(1,21):
#    if i == 4 or i == 13:
#        state = "Unlucky !"
#    elif i%2 == 0:
#        state = "Even !"
#    else:
#        state = "Odd !"    
#    print(str(i) + " is "+ state)