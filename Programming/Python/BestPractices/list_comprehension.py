# List of even numbers below 20\
list_even = []
for i in range(20):
    if i%2 == 0:
        list_even.append(i)

# Better way
list_even = [x for x in range(20) if i%2==0 ]
print(list_even)
