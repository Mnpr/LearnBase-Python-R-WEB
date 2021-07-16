print("** Rock **")
print("** Paper **")
print("** Sissor **")

player1 = input("Enter player 1 choice :\n")
player2 = input("Enter player 2 choice :\n")

if player1 == player2:
    print("That's a draw")
elif player1 == "rock" and player2 == "paper":
    print("Player 2 wins")
elif player1 == "rock" and player2 == "sissor":
    print("Player 1 wins")
elif player1 == "paper" and player2 == "sissor":
    print("Player 2 wins")
elif player1 == "paper" and player2 == "rock":
    print("Player 1 wins")
elif player1 == "sissor" and player2 == "rock":
    print("Player 2 wins")
elif player1 == "sissor" and player2 == "paper":
    print("Player 1 wins")
else:
    print("Something went wrong :(")