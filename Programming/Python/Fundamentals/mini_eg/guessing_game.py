import random
number = random.randint(1,10)
#again = ""
#guess = int(input("Guess the number between 1 and 10 :"))
#while again != "n":
#    if(number == guess):
#        print("you won ! The number you guessed is correct !!")
#    elif(number<guess):
#        print("Too high")
#    else:
#        print("Too low")
#    print(number)
#    again = input("Do you wanna play again ? (y/n) :")
#    if again == "n":
#        break
#    guess = int(input("Guess the number between 1 and 10 :"))
#print("Thanks for playing. Byeee !!!")    


guess = None
while guess != number:
    guess = int(input("pick a number between 1 to 10"))
    if guess>number:
        print("Too high")
    elif guess<number:
        print("Too low")
    else:
        print("You won !!!")
print(number)