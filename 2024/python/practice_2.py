# Some more python Codewars Kata

# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/python
# 7Kyu: Shortest Word
# FUNDAMENTALS

def find_short(s):
    s_arr = s.split()
    shortest_length = len(s_arr[0])

    for word in s_arr:
        if len(word) < shortest_length:
            shortest_length = len(word)
    return shortest_length


print(find_short("bitcoin take over the world maybe who knows perhaps"))  # 3
print(find_short("turns out random test cases are easier than writing out basic ones"))  # 3

# https://www.codewars.com/kata/5832db03d5bafb7d96000107/python
# 7Kyu: Lottery machine
# STRINGS, FUNDAMENTALS


def lottery(s):
    new_str = ""
    str_arr = list(s)

    for ltr in str_arr:
        if ltr.isdigit():
            new_str += ltr

    return_str = ""
    if len(new_str) == 0:
        return "One more run!"
    else:
        for num in new_str:
            if num in return_str:
                pass
            else:
                return_str += num

    return return_str


print(lottery("wQ8Hy0y5m5oshQPeRCkG"))  # "805"
print(lottery("ffaQtaRFKeGIIBIcSJtg"))  # "One more run!"