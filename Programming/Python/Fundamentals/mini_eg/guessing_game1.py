import random
number = random.randint(1,10)

while True:
    guess = int(input("pick a number between 1 to 10 \n"))
    if guess>number:
        print("Too high \n")
    elif guess<number:
        print("Too low \n")
    else:
        print("You won !!! \n")
        print(number) 
        again = input("Do you wanna play again ? (y/n) \n")
        if again == "y":
            guess = None
            number = random.randint(1,10)
        else:
            print("Thank you for playing. Byee !!")
            break
