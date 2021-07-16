# include <iostream>
# include <string>

using namespace std;

class Book {
    private:
        string title;
        string author;

    public:
        Book(string title, string author){
            this->title = title;
            this->author = author;
        }

        string getTitle(){
            return this->title;
        }

        void setTitle(string title){
            this->title = title;
        }
        string getAuthor(){
            return this->author;
        }

        void setAuthor(string author){
            this->author = author;
        }
};

int main() 
{
    Book book1("Harry Potter","JK Rowling");
    cout << book1.getTitle() << endl;

return 0;

}