
from random import choice, randint

# randomly assigns values to these four variables
actually_sick = choice([True, False])
kinda_sick = choice([True, False])
hate_your_job = choice([True, False])
sick_days = randint(0, 10)


calling_in_sick = None  # set this to True or False with Boolean Logic and Conditionals!




if (actually_sick and sick_days >= 1) or (kinda_sick and hate_your_job):
    print("actually sick and sick days remaining \n" + str(actually_sick)+ str(sick_days) + "\n or kinda sick and hate_your_job"+ str(kinda_sick) + str(hate_your_job))
    calling_in_sick = True   
else:
    calling_in_sick = False

print("calling sick" + str(calling_in_sick))