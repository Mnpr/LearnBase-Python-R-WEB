from functools import reduce

# List of natural numbers in range (0,20]
numbers = list(range(1,21))

def square(n):
    return n**2

def even(n):
    return n%2 == 0

def multiply(x,y):
    return x * y

# Maps function to each element in the iterator
squares = list(map(square, numbers))

# Filters ( New list of even numbers )
evens = list(filter(even, numbers))

# Reduce (multiplication result of all the elements in iterator)
products = reduce(multiply, numbers)

# Lambdas ( Functional Way )
squares = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x%2 ==0, numbers))
products = reduce(lambda x,y: x*y, numbers)

print(f'''
Elementwise squares in the list:\n>> {squares}\n
List of Even numbers in the list:\n>> {evens}\n
Accumulated product of list elements:\n {products}
''')
