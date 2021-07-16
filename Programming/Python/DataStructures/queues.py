# Queue with List
class Queues:
    def __init__(self):
        self.items = []

    def is_empty(self):
       return self.items == []

    def enqueue(self, item):
        self.items.insert(0, item)
    
    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)

    def info(self):

        q_info = f"""
        Info [ Queue ]
        ____________________________________________
        Queue        : {self}
        Queue empty  : {self.is_empty()}
        Queue Size   : {self.size()}
        --------------------------------------------
        # Queue First: {self.items[-1]}
        # Queue Last : {self.items[ 0]}
        --------------------------------------------
        """

        print(q_info)

# Test queue object
queue = Queues()

# Operations:
for i in range(5):
    queue.enqueue(i)
    print(f'\t{i} added to the queue')

# FIFO
print(f'\t{queue.dequeue()} removed from the queue')

# Final queue Info
queue.info()