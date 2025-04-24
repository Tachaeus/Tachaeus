                                        #String Manipulation
#Length of value
name = "Fin Hoffstetter" ##Spaces are included
phone = input("Enter your phone number: ")

print(f"Your name is {len(name)} characters long")


#Find
print(f"Find is {name.find("e")}") ##Shows first instance
print(f"Reverse of find is {name.rfind("e")}") ##Last occurence
print(f"Find is {name.find("q")}") ##No such iteration


#Case Ops
name =  name.capitalize()
name = name.upper()
ans =  name.isdigit() ##Only if string ONLY contains digits || Same with 'alpha(alphabetical)'
phone_digits = phone.count("-")
replace = phone.replace("-", " ")

print(name)
print(ans)
print(phone_digits)
print(replace)


#Input Validation
name = input("Enter your name: ")
name.find(" ")
name.isalpha()

if len(name) > 10:
    print("No more than 10 characters!")
elif not name.find(" ") == -1:
    print("Your name cannot contain spaces!")
elif not name.isalpha():
    print("name cannot contain numbers!")
else:
    print(f"{name} is alright!")