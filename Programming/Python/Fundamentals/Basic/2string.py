#sting == unicode character

#multiple line string literals
print("""\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
\n""")

print("py" "thon\n") # python

# can concatenate a variable and a string literal with +
x = "py"
print(x + "thon\n") #python

#This feature is particularly useful when you want to break long strings:
text = ('Put several strings within parentheses '
        'to have them joined together.')
print(text + "\n")

#Strings can be indexed (subscripted), with the first character having index 0
word = 'Sudesh'
print(word[0] +"----"+ word[5] + "\n") #S----h

#indices may also be negative number 
print(word[-1] + word[-2] + word[0]+"\n") #last character, second last and first character hsS

#slicing is also supported
another_word = "Illuminati"
print(another_word[0:3]) #Ill doesnot [0] included [3] excluded
print(another_word[:2] +"\n" + another_word[2:]+"\n\n") # [0:2] + [2:length-1]

print(another_word[-2:]+ "\n") #ti second last word and last word
word = "Python"
print("""\
 +---+---+---+---+---+---+
 | P | y | t | h | o | n |
 +---+---+---+---+---+---+
 0   1   2   3   4   5   6
-6  -5  -4  -3  -2  -1
\n""")

print(word[-3:]) #hon
print(word[100:]) #returns ''
print(word[2:100] + "\n\n") #thon
print(word[2:5]) #tho
print(word[2:6] + "\n") #thon

#If you need a different string
print('J'+ word[1:])



#There are several ways to format strings in  python
#Python to interpolate variable
#the new way 3.6+ is F-strings

#guess = 3             //works on version 3.6+
#print(f"your guess {guess} is correct")


#the old way of formatting 2-3.5
x=4
print("i have told you {} times already".format(x))

fruit = "mango"
ripeness = "unripe"
print("the fruit {} is {} ".format(fruit, ripeness))



first = "django"
last = "unchained"
formatted = "First Name: {}, Last Name: {} ".format(first, last)
print(formatted)



#the old way %operator(depricated)
print("i have told you %d times already" %(x) )