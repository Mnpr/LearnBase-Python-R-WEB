# Lists
# in keyword
numbers = [1,2,3,4,5,6,7,8,9]

for number in numbers:
    if number>5:
        print(number)
        
numbers = input(" Enter your number CSV")
numbers = numbers.split(",")
print(numbers)
print("\n")

user_number = []
for number in numbers:
    user_number.append(int(number))
    print(user_number)

# or
print("\n")
[int(number) for number in numbers]
[number*2 for number in numbers]
