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
    pass


print(lottery("wQ8Hy0y5m5oshQPeRCkG"))  # "805"
print(lottery("ffaQtaRFKeGIIBIcSJtg"))  # "One more run!"

