import argparse

def multiplesOf3Or5(number):
    sum_three = 0
    sum_five = 0

    if number < 3:
        return 0
    
    for i in range(3, number, 3):
        sum_three += 3
    
    for i in range(5, number, 5):
        if i % 3 == 0:
            continue
        sum_five += 5

    return sum_three + sum_five

if __name__ == "__main__":
    arguments = argparse.ArgumentParser()
    arguments.add_argument("number", type=int)
    args = arguments.parse_args()
    result = multiplesOf3Or5(args.number)
    print(result)