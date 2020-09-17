# Lottery Testing
import random

lottery_number = set()
user_number = set()

def get_lottery_number():
    for i in range(6):
        lottery_number.add(random.randint(1,50))
    return lottery_number
    
def get_user_input():
    user_input = input("Enter your 6 Digit number Comma Separated:")
    number_list = user_input.split(",")
    for number in number_list:
        user_number.add(int(number))
    #user_number = {int(number) for number in number_list}
    return user_number

get_user_input()
get_lottery_number()

print(" \nUser Lucky Number :")
print(lottery_number)

print(" \nSecret Lottery Number :")
print(user_number)

print(" \nCommon Numbers :")
lottery_number.intersection(user_number) 
