import random


choices = ["rock", "paper", "sissor"]
p1 = (random.choice(choices))
print(p1 + ("\n*space*" *50) )
p2 = input("Player 2: rock, paper, or scissor ")

if p1 == p2 == ("rock" or "paper" or "sissor"):
    print("Draw")
elif p1 == "rock" and p2 == "scissors":
    print("You lose !")
elif p1 == "paper" and p2 == "rock":
    print("You lose !")
elif p1 == "scissors" and p2 == "paper":
    print("You lose !")
#elif p1  !== ("rock" or "paper" or "sissor") or p2  !== ("rock" or "paper" or "sissor"):
#    print("something went wrong :(")
else:
    print("you win !")