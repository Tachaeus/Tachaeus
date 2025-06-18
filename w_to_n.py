## Prompt
amount = str(input("Enter amount in words: "))
index = amount.find(" ")
last_index = amount.rfind(" ")

## Dictionary for the amount's corresponding values
def change_basics(amount):
    values = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
        "elven": 11,
        "twelve": 12,
        "thirteen": 13,
        "fourteen": 14,
        "fifteen": 15,
        "sxteen": 16,
        "seventeen": 17,
        "eighteen": 18,
        "nineteen": 19,
        "twenty": 20
    }
    
    ## Defines operable output
    x_result = values.get(amount.lower())
    result = values.get(amount[:index].lower())

    ## Handles values with multiple digits
    if amount[index:].lower() == " one":
        if amount[last_index:].lower() == " thousand":
            return result * 1000
        else:
            return result + 1
        
    ## Adds zeros
    elif amount[index:].lower() == " hundred":
        result *= 100
        print(f"{result:,}")
    elif amount[index:].lower() == " thousand":
        result *= 1000
        print(f"{result:,}")
    elif amount[index:].lower() == " hundred thousand":
        result *= 100000
        print(f"{result:,}")
    else:
        return x_result
    

print(change_basics(amount))