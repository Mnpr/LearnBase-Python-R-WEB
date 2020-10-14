# include <string>
#include <iostream>

using namespace std;

int main () 
{
    string greeting = "Hello";
    //      indexes:   01234

    cout << greeting.length();
    cout << greeting[0] << endl;
    cout << greeting.find("llo") << endl;
    cout << greeting.substr(2) << endl;
    cout << greeting.substr(1, 3) << endl;

return 0;

}