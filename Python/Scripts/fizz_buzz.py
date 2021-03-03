# for n = 1-100 print:
#   fizz if n % 3 == 0
#   buzz if n % 5 == 0
#   fizzbuzz if n%3 == 0 and n%5 ==0

def fizzbuzz(n):
    for i in range(1, n+1):
        if i%3 == 0 and i%5==0:
            print('‛¯¯٭Fizz٭¯¯(▫▫)¯¯٭Buzz٭¯¯’')
        elif i%3 == 0:
            print('٭Fizz٭')
        elif i%5 == 0:
            print('٭Buzz٭')
        else:
            print(i)

fizzbuzz(100)


  