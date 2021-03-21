# Stack with List
class Stack:
    def __init__(self):
        self.items = []

    def is_empty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def size(self):
        return len(self.items)

    def info(self):

        stack_info = f"""
        Info [ Stack ]
        ____________________________________________
        Stack        : {self}
        Stack empty  : {self.is_empty()}
        Stack Size   : {self.size()}
        --------------------------------------------
        # Stack Top    : {self.items[-1]}
        # Stack Bottom : {self.items[ 0]}
        --------------------------------------------
        """
        print(stack_info)

# Test stack object
stack = Stack()

# Operations:
for i in range(5):
    stack.push(i)
    print(f'\t{i} added to the stack')

# LIFO
print(f'\t{stack.pop()} popped out of stack')

# Final Stack Info
stack.info()

