# exercise-01 Vowel or Consonant

# Write the code that:
# 1. Prompts the user to enter a letter in the alphabet:
#      Please enter a letter from the alphabet (a-z or A-Z): 
# 2. Write the code that determines whether the letter entered is a vowel
# 3. Print one of following messages (substituting the letter for x):
#      - The letter x is a vowel
#      - The letter x is a consonant

# Hints:  Use the in operator to check if a character is in another string
#         For example, if some_char in 'abc':



# letter = input('Enter any letter": ').lower()
# print(f'The user entered {letter}')

# if letter == 'a':
#     print('vowel')

# elif letter == 'e':
#     print('vowel')


# elif letter == 'i':
#     print('vowel')


# elif letter == 'o':
#     print('vowel')


# elif letter == 'u':
#     print('vowel')

# elif letter == 'y':
#   print ('VOWEL. NICE TRY.')

# else:
#     print ('consonent')


# /////////////////////////////

# exercise-02 Length of Phrase

# Write the code that:
# 1. Prompts the user to enter a phrase:
#      Please enter a word or phrase: 
# 2. Print the following message:
#      - What you entered is xx characters long
# 3. Return to step 1, unless the word 'quit' was entered.


# word = input('PLease enter a word or phrase: ')

# n = len(word)

# print(f'What you entered is {n} characters long')


# //////////////////////////////////////


# exercise-03 Calculate Dog Years

# Write the code that:
# 1. Prompts the user to enter a dog's age like this:
#      Input a dog's age: 
# 2. Calculates the equivalent dog years, where:
#      - The first two years count as 10 years each
#      - Any remaining years count as 7 years each
# 3. Prints the answer in the following format:
#      The dog's age in dog years is xx

# Hints:
# Use the int() function to convert the string returned from input() into an integer
# Start with an if that checks if the age is less than 3



# year = int(input('Input a dog\'s age: '))
# dogyear = year + 7
# if year<3:
#     dogyear = year+10 

# print(f'The dog\'s age is {dogyear} in doggy years: ')


