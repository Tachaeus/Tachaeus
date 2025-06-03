                    ##Collections(Variables storing multiple values)
                       #Lists
serials = ["Dahmer", "Bundy", "Wuornnos", "Manson"]

#Adding Items
serials.append("Jack")

print(serials[3])
print(serials)
#print(help(serial))


#Sorting (Alphabetically)
serials.sort()


#Re-asigning Position
serials[1] = "Jack" ##Duplicate


#Using Loops
for serial in serials:
    print(serial)

print(serials)


                        # 2D Lists
pack = [
["mongo", "node","express", "java"],
["kubernetes", "react", "vue", "django"],
["vercel", "netlify", "docker", "ghpages"]
]


for collection in pack:
    for tool in collection:
        print(tool, end = " ")
    print()


                        #Sets
killers = {"Dahmer", "Bundy", "Wuornnos", "Manson"}

print(killers)

#killers[0] = "Bell" -> Won't work (Unordered & Immutable collection)

#killers.append("Bundy") -> Won't work (NO DUPLICATES)

killers.add("Bundy") ##Notice there's still only just one of these (SO NO DUPLICATES)

print(dir(killers))
print(killers)

                        #Tuples
lifers = ("Dahmer", "Bundy", "Wuornnos", "Manson")

#lifers.append("Manson") -> Won't work
print(lifers)
print("Bundy" in lifers)

                       # 2D Tuples
dialpad = ((1, 2, 3),
           (4, 5, 6),
           (7, 8, 9),
           ('*', 0, '#'))

for digits in dialpad:
    for numbers in digits:
        print(numbers, end = " ")
    print()