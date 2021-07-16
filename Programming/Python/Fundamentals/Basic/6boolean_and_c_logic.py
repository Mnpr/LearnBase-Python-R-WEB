#True and False (Boolean values)
# and, or and not (Conditional Logic)
#Boolean and conditional logic
print("Welcome to Random dice spinner")
from random import randint
choice = randint(1,6)
print("Rolling the dice ! ...\n")
print(choice)
if choice == 6 or choice == 1:
    print("Spin the dice again")
else:
    print("Next player's Turn")
    
print("Move"+ str(choice))


#
#import random
#
#min = 1
#max = 6
#
#roll_again = "yes"
#
#while roll_again == "yes" or roll_again == "y":
#    
#    print "Rolling the dices..."
#    print "The values are ..."
#    print random.randint(min,max)
#    
#    roll_again = raw_input("Roll the dice again\n")


print("\n\n#TRUTHY AND FALSY VALUE")

x = 1
print(x is 1) #truthy value
print(x is 0) #falsy value

#naturally falsy values : empty string/objects, None, 0

#favourite series
series = input("What is your favourite anime series ?\n")
if series:
    print("I like "+series+" too ;)")
else:
    print("I see !, You don't watch anime :(\n\n")
    
    
    

from random import choice
food = choice(['apple','grape', 'bacon', 'steak', 'worm', 'dirt'])

print(food)
if food == 'apple' or food == 'grape':
    print("fruit")
elif food == 'bacon' or food == 'steak':
    print("meat")
elif food == 'dirt' or food == 'worm':
    print('yuck')

    
#simple entry fee example with not
print("\n\nWelcome to the Zoo !!!")
age = int(input("\nPlease Enter your age :"))

if not((age >= 2 and age <= 8) or age >= 60):
    print("The entry fee is 10 Euro")
else:
    print("You only pay 5 Euro (50% Discount)")