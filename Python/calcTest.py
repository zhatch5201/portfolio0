import os


def main():
    def userNumbersX():
        userNumbersX.x = float(input("Please input the 'x' operator: "))

        try:
            float(userNumbersX.x) == float() == True
            print("{} is an integer".format(userNumbersX.x))
        except ValueError or TypeError or SyntaxError:
            print("{} is a string".format(userNumbersX.x))
            input("Press any key to continue. ")
            os.system("cls")
            userNumbersX()
        return userNumbersX.x

    def userNumbersY():
        userNumbersY.y = float(input("Please input the 'y' operator: "))

        try:
            float(userNumbersY.y) == float() == True
            print("{} is an integer".format(userNumbersY.y))
        except ValueError or TypeError or SyntaxError:
            print("{} is a string".format(userNumbersY.y))
            os.system("cls")
            userNumbersY()
        return userNumbersY.y

    def userOperation():
        userOperation.i = str(input("What operator would you like to have? "))
        if str(userOperation.i) == "*":
            print(float(userNumbersX.x) * float(userNumbersY.y))
            input()
        elif str(userOperation.i) == "/":
            print(float(userNumbersX.x) / float(userNumbersY.y))
            input()
        elif str(userOperation.i) == "+":
            print(float(userNumbersX.x) + float(userNumbersY.y))
            input()
        elif str(userOperation.i) == "-":
            print(float(userNumbersX.x) - float(userNumbersY.y))
            input()
        elif str(userOperation.i) == "%":
            print(float(userNumbersX.x) % float(userNumbersY.y))
            input()
        else:
            userOperation()

    userNumbersX()
    userNumbersY()
    userOperation()


print("All operations will follow this format: 'x' 'operator' 'y' ")
main()
# You have to have multiple while functions??

