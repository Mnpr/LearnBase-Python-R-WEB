from movie import Movie

class User:
    def __init__(self, name):
        self.name = name
        self.movies = []

    def __repr__(self):
        return "<User : {}>".format(self.name)

    def add_movies(self, name, genre):
        movie = Movie(name, genre, False)
        self.movies.append(movie)

    def delete_movie(self, name):
        self.movies = list(filter(lambda x: x.name != name, self.movies))

    #------------------------------------------------------
    # def watched_movies(self):
    #     list_watched = []
    #     for i in self.movies:
    #         if i.watched == True:
    #             list_watched.append(i)
    #     return list_watched
    #------------------------------------------------------

    def watched_movies(self):
        list_watched = list(filter(lambda x: x.watched, self.movies))
        return list_watched

    #------------------------------------------------------
    # with open('my-file.txt', 'w') as f:
    #   f.write('Hello there !')
    #
    #  with open('my-file.txt', 'r') as f:
    #   print(f.readline())
    #------------------------------------------------------

    # -------------------   CSV ---------------------------
    # def save_to_files(self):
    #     with open('{}.txt'.format(self.name), 'w') as f:
    #         f.write(self.name + '\n')
    #         for movie in self.movies:
    #             f.write('{}, {}, {}\n'.format(movie.name, movie.genre, str(movie.watched)))

    # @classmethod
    # def load_from_file(cls, filename):
    #     with open(filename, 'r') as f:
    #        content = f.readlines()
    #        username = content[0]
    #        movies = []
    #        for line in content[1:]:
    #            movie_data = line.split(',')
    #            movies.append(Movie(movie_data[0], movie_data[1], movie_data[2] == 'True'))
            
    #        user = cls(username)
    #        user.movies = movies
    #        return user
    # -------------------------------------------------------
    # ------------------   JSON   ---------------------------

    def json(self):
        return {
            'name': self.name,
            'movies': [
                movie.json() for movie in self.movies
            ]
        }

    @classmethod
    def from_json(cls, json_data):
        user = cls(json_data['name'])
        movies = []
        for movie in json_data['movies']:
            movies.append(Movie.from_json(movie))

        user.movies = movies
        return user

    # -------------------------------------------------------
