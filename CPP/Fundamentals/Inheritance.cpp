# include <iostream>
# include <string>

using namespace std;

class Chef{
    public:

        string name;
        int age;

        Chef(string name, int age){
            this->name = name;
            this->age = age;
        }

        void makeChicken(){
            cout << "The chef makes chicken" << endl;
        }

        void makeSalad(){
            cout << "The chef makes salad" << endl;
        }

        void makeSpecialDish(){
            cout << "The chef makes a special dish" << endl;
        }
};

class ItalianChef : public Chef{
    public:

        string countryOfOrigin;

        ItalianChef(string name, int age, string countryOfOrigin) : Chef(name, age){
            this->countryOfOrigin = countryOfOrigin;
        }

        void makePasta(){
            cout << "The chef makes pasta" << endl;
        }

        // override
        void makeSpecialDish(){
            cout << "The chef makes chicken parm" << endl;
        }
};

int main() 
{ 
    Chef myChef("Gordon Ramsay", 50);
    myChef.makeChicken();

    ItalianChef myItalianChef("Massimo Bottura", 55, "Italy");
    myItalianChef.makeChicken();
    cout << myItalianChef.age << endl;

return 0;

}