word = '''\
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
'''
print(word)


print("""\
-----------------------------------------

Usage: python3 [OPTIONS]
     -[FILENAME]                Run Python file
     -c [COMMAND]               Run Python command
""")


print("""\

-----------------------------------------

Declaring an encoding (other than default)

- #!/usr/bin/env python3 # This should be a first line
- # -*- coding: cp1252 -*- 

""")

#!/usr/bin/env python3 # This should be a first line
# -*- coding: cp1252 -*- 

#------------------------------------
print("""\
------------------------------------------

Numbers Type: 
        int,
        float,
        decimal.Decimal (Decimal),
        fractions.Fraction (Fraction),
        3+5j (J | j suffix Complex Numbers)

- Floor division: // (discarding any fractional part) 
- ** : square
-  _ : last  printed expression ( Interactive mode >>> )

""")



# \ : escape quites
# r '\' : without specialchar interpretition
# e.g. :  print(r'C:\some\name') # n is new line



# --------------------------------
print("""\

------------------------------------------
Fibonacci Series : bis 100


""")



# -----------------------------------

print("""\

------------------------------------------

Default argument function :
    This is a doc string and it describes the function

    def ask_ok(response, retries=4, reminder='Please Try again'):
        ...
         .
         .

(y, ye, yes) || (n, no)

""")

#default argument function 

def ask_ok(response, retries=4, reminder='Please Try afain'):
    """ Get the response from the user 'y','ye','yes' || 'n','no' """
    while True:
        user_input = input(response)
        if user_input in ('y','ye','yes'):
            return True
        if user_input in ('n','no'):
            return False
        retries = retries -1
        if retries < 0:
            raise ValueError('invalid user response !')
        print(reminder)
ask_ok('continue the Data Structures ? ')

# --------------------------------
print("""\

------------------------------------------

Data Structures
    - list
    - tuples
    - sets 
    - dictionaries



""")
