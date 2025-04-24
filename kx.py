                                        #Math
#Extracting constants from py
import math

print(math.pi)
print(math.e) #exponential constant


#Other math functions
result = math.sqrt(9)
result1 = math.ceil(9.3) #Rounded up
result2 = math.floor(9.3) #Rounded down

print(result)
print(result1)
print(result2)

#Other math functions
a = 3
b = -4
c = 4.5

result1 = max(a, b, c) #/min
result2 = abs(b)
result3 = round(c)

result4 = pow(a, 2)

print(result1, result2, result3, result4)


#Try-out(c=√a²+b²)
x = float(input("Input side 'a': "))
y = float(input("Input side 'y'"))

z = math.sqrt(pow(x, 2) * pow(y, 2))

print(f"Side z = {z}")
