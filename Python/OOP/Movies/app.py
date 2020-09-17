from user import User
import json

# new_user = User('James')

# new_user.add_movies("Avatar", "Sci-Fi")
# new_user.add_movies("The Matrix", "Sci-Fi")
# new_user.add_movies("Undisputed", "Action")

# new_user.delete_movie("Avatar")
# print(new_user.watched_movies())
# print(new_user.movies)

#------------- CSV ---------------------
# new_user.save_to_files()
# user = User.load_from_file('James.txt')
# print(user.movies)
#----------------------------------------


#-------------- JSON --------------------
# print(new_user.json())

# --- Write ---
# with open('my_file.txt', 'w') as f:
#     json.dump(new_user.json(), f)

# --- Read ---

with open('my_file.txt', 'r') as f:
    json_data = json.load(f)
    user = User.from_json(json_data)
    
print(user.json())

#----------------------------------------