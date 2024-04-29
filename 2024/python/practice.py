# Some introductory python Codewars Kata

# https://www.codewars.com/kata/57a083a57cb1f31db7000028/python
# 8Kyu: Powers of 2
# MATHEMATICS, FUNDAMENTALS
def powers_of_two(n):
    ret_list = []
    for num in range(n + 1):
        ret_list.append(2 ** num)
    return ret_list


# https://www.codewars.com/kata/59342039eb450e39970000a6/python
# 8Kyu: Count Odd Numbers below n
# PERFORMANCE, MATHEMATICS
def odd_count(n):
    return int(n/2)


# https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/python
# 8Kyu: Flick Switch
# FUNDAMENTALS, LISTS
def flick_switch(lst):
    boolean = True
    result = []

    for word in lst:
        if word == "flick":
            boolean = not boolean
        result.append(boolean)
    return result


if __name__ == '__main__':
    print(powers_of_two(1))  # [1, 2]
    print(powers_of_two(4))  # [1, 2, 4, 8, 16]

    print(odd_count(15))  # 7
    print(odd_count(15023))  # 7511

    print(flick_switch(['codewars', 'flick', 'code', 'wars']))  # [True, False, False, False]
    print(flick_switch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))  # [True, True, False, False, True]
