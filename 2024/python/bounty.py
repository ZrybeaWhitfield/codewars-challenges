# https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/
# 6Kyu: Duplicate Encoder
# STRINGS, ARRAYS, FUNDAMENTALS

# Steps:
# 1. Iterate through word and add letters to dict where key is letter and value is number of occurences
# 2. if the letter isn't already in dict, add it and if not add 1 to the value
# 3. Iterate through word and for each letter, retrieve the value from dict and add char to string based on occurence
# "(" < 1 ")"
# return string
def duplicate_encode(word):
    letter_tracker = {}
    return_str = ""
    word = word.lower()
    for letter in word:
        if letter_tracker.get(letter) is None:
            letter_tracker.setdefault(letter, 1)
        else:
            letter_tracker[letter] += 1

    for ltr in word:
        if letter_tracker.get(ltr) == 1:
            return_str += "("
        else:
            return_str += ")"
    return return_str


if __name__ == '__main__':
    print(duplicate_encode("din"))
    print(duplicate_encode("recede"))
    print(duplicate_encode("Success"))
    print(duplicate_encode("(( @"))
