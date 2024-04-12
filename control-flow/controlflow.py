color = input('Enter "green", "yellow", "red": ').lower()
print(f'The user entered {color}')

if color == 'green':
    print('go!')

elif color == 'yellow':
    print ('slow down!')

elif color == 'red':
    print ('stop!')

elif color == 'lets have some fun':
    action = input('A cop saw you shoot that gap, hes now on your tail. Make your choice wisely, pull over, or hit the gas?: ').lower()
    print (f'The user entered {action}')

if action == 'pull over': 
            print ('the cop pulls you over, he emerges from the car and starts approaching your vehicle...')

elif action == 'hit the gas':
        print ('now were talking, lets see how far this rabbit hole goes. Strap in:')


        print ('You hit the gas and take off, after a few minutes, the cop is in your rearview mirror, but you hear a rattling sound and the only gas station is on the haunted side of town, do you want to go to the shop, or your house?')

if action == 'drive to the shop':
    print ('You drive over to the spooky side of town, there are skeletons everywhere. You can either head directly to the shop, or explore a little.')

elif action == 'drive to my house':
    print ('LAME. You go home and sleep it off.')
    print ('In the morning, you hear a knock at the door. Its the police, they traced your plates and are now at your door with a warrant. Good job dumbass, story ends here.')




# x=0
# while x<1:
#     color = input('Enter "green", "yellow", "red": ').lower()
# print(f'The user entered {color}')

# # if color !== 'quit':
# #    break

# where_my_things_are = {
#   'bed': 'home',
#   'phone': 'pocket',
#   'cat': 'home'
# } 

# for key, value in where_my_things_are.items ():
#         print (f'My {key} is kept at {value}')



# name = item['name']
# print(name)
# > bed
# item['name'] = 'pocket'
# print(item['name'])
# > cat


# if 'home' in item:
#     print( f"{item['name']} is in {item['home']}")
# else: 
#     print ( f"{item['name']} is not at home")
#     #