                                         #If statements
#Ⅰ
age = int(input("Give your age: "))

if age >= 5 and age <= 50:
    print("Please continue!")
elif age <= 5 or age >= 110:
    print("The age you entered is invalid!")
else:
    print("You're over-age!")

#Ⅱ
order = input("Would you like sth to eat? (Y/N)")

if order == "Y":
    print("Coming right up!")
elif order == "N":
    print("You don't get any!")
elif order == "":
    print("Don't ignore me!")
else:
    print(f"{order} is invalid!")


# Ⅲ
weight = float(input("How much do you weigh? "))
unit = input("American or English? (K/L)")

if unit == "K":
    weight *= 2.205
    unit = "Kgs"
else:
    weight /= 2.205
    unit = "lbs"

print(f"Your weight is {round(weight, 3)}{unit}!")

#Ⅳ
temp = 18
sunny = True

if temp >= 0 and temp <= 20:
    print("Tepmerature is fine!")
else:
    print("This is not good!")

if not sunny:
    print("We're good to go!")
else:
    print("Avoid the sun!")

#Ⅴ
active = True

if active:
    print("This user is available!")
else:
    print("User inactive")


#Conditional expression(Ternary operator)
a = 5
b = 7
clearance = True

max = a if a > b else b
user = "Access granted" if clearance else "Access denied!"

print(max)
print(user)
