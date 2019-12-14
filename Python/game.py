import random
import os, sys
import itertools


def main():
    def welcome():  # Welcome and Instructions to the game
        welcMsg = str(
            "Welcome to the 'Mastermind Game'! \nThis is a game where you will compete against the computer to guess the numbers correctly before you run out of tries.\n"
        )
        instructions = str(
            "For this game, the computer will choose four(4) numbers at random from 1-6 inclusive.\nYour objective is to guess the correct numbers before you run out of tries. Each game you will have seven(7) tries at guessing the correct numbers.\n"
        )
        print(welcMsg)
        print(instructions)

    def computerChoices():  # Don't forget to not print the answers!
        computerChoices.computerList = random.sample(range(1, 6), 4)
        computerChoices.attempt = 0
        arrLen = int(len(computerChoices.computerList))
        while random.sample(range(1, 6), int(arrLen)) == True:
            computerChoices()

    def guessChecks():
        def userGuesses():
            print("Please input your 4 numbers, press enter after each one. ")
            userGuesses.userList = []
            for x in range(0, 4):
                userGuesses.userInt = int(input())
                userGuesses.userList.append(userGuesses.userInt)
                if any(i > 6 for i in userGuesses.userList) == True:
                    print("You input invalid values! ")
                    userGuesses()

            print("Your numbers are: " + str(userGuesses.userList))
            listCheck()

        def listCheck():
            if userGuesses.userList == computerChoices.computerList:
                print("You won! ")
                input()
                exit()

            while userGuesses.userList != computerChoices.computerList:
                computerChoices.attempt = computerChoices.attempt + 1
                if (
                    computerChoices.attempt > 7
                ):  # They lost the game because they ran out of attempts
                    lossPrompt = input(
                        "You lost!"
                        + "\n"  ##For some reason I can't get it to print the correct answer array, it should be computerChoices.computerList
                        + "Try again? y/n "
                    )

                    if lossPrompt == "y" or "Y":
                        main()
                    else:
                        os.system("TASKKILL /F /IM game.py \n")
                ############################# This was by far the hardest part
                if len(computerChoices.computerList) == len(
                    userGuesses.userList
                ):  # This will only tell you if the item is in the correct position if it is in order
                    x = int(len(computerChoices.computerList))
                    incAns = 0
                    for i in range(int(x)):
                        if computerChoices.computerList[i] == userGuesses.userList[i]:
                            print(
                                "The number "
                                + str(userGuesses.userList[i])
                                + " is correct."
                            )
                        else:
                            incAns = incAns + 1
                            print(
                                "The number "
                                + str(userGuesses.userList[i])
                                + " is incorrect."
                            )

                    if incAns != 0:
                        print(
                            "You guessed Wrong! Try again! Attempt Number: "
                            + str(computerChoices.attempt)
                        )
                        userGuesses()

        userGuesses()

    welcome()
    computerChoices()
    guessChecks()


main()
