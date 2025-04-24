#Displaying f-strings
print("Behold, my first python test")

Say = "'Hello World'"
To = "TachWeb"
age = -0.14
student = True

print(f"Say {Say} to {To}, who is aged {age}")


#Floats(floating point number)
price = 45.50

print(f"We charge a minimum of KES {price}")


#Type function
print(type(Say))
print(type(age))


#Type-casting(converting one data-type to another)
student = str(student)
age = bool(age)

print(student)
print(type(student))
print(age)


#Implicit type-casting
x = 24
y = 12.0
x = x / y

print(x)

#Basicly just how it works in js
people = 5

#The first:'regular assignment iperator' | Second:'integrated assignment operator'
people = people + 1
people += 1

people = people *2
people *= 2

people = people /2
people /= 2

people = people ** 2
people **= 2

people = people % 2
people % 2

print(people)
