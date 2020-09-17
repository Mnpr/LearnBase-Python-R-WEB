print("** Rock **")
print("** Paper **")
print("** Sissor **")

player1 = input("Enter player 1 choice :\n")
print("*space*\n" * 50)
player2 = input("Enter player 2 choice :\n")

if player1 == player2 == ("rock" or "paper" or "sissor"):
    print("That's a draw")
elif player1 == "rock":  
    if player2 == "paper":
        print("Player 2 wins")
    elif player2 == "sissor":
        print("Player 1 wins")
elif player1 == "paper":
    if  player2 == "sissor":
        print("Player 2 wins")
    elif player2 == "rock":
        print("Player 1 wins")
elif player1 == "sissor":
    if player2 == "rock":
        print("Player 2 wins")
    elif player2 == "paper":
        print("Player 1 wins")
else:
    print("Something went wrong :(")
    
#another clean approach

#p1 = input("Player 1: rock, paper, or scissors ")
#p2 = input("Player 2: rock, paper, or scissors ")
# 
#if p1 == p2:
#    print("Draw")
#elif p1 == "rock" and p2 == "scissors":
#    print("p1 wins")
#elif p1 == "paper" and p2 == "rock":
#    print("p1 wins")
#elif p1 == "scissors" and p2 == "paper":
#    print("p1 wins")
#else:
#    print("p2 wins")