                                     #Accepting user input
#Basic user-input
name = input("Enter your name: ")
age = int(input("Enter rour age: "))

print(f"You're {name}.")
print(f"And you're {age + 1} years old.")


#Mad Libs game(user-input-defined story)
adj1  = input("Enter adj: ")
adj2 = input("Enter adj: ")
noun = input("Enter noun: ")
verb = input("Enter verb: ")

print(f"The {noun} was {adj1} today. There were {adj2}er people than usual. The one next to me was {verb}ing sus.")


                                    #Claculation...
#(Area of A Circle)
radius = float(input(f"Enter circle radius: "))
π = 3.142
area = π * radius * radius

print(f"The area of your circle is: {round(area, 4)}")


#(Shopping Cart)
item = input(f"I would like to purchase: ")
price = float(input(f"The one that is: "))
quantity = float(input(f"How many/much would you like? "))

total = float(price * quantity)

print(f"You have bought {quantity} {item}(s) of KES{price}")
print(f"The total cost will be KES{round(total, 2)}")