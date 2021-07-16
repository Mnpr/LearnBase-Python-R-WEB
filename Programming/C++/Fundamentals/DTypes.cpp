# include <iostream>
# include <string>

using namespace std;

/******************************************************
Names are case-sensitive and may begin with: letters, _
    After, may include letters, numbers, _

Convention: camelCase.

*******************************************************/


int main()
{
    string name = "Dorje";
    cout << "Welcome to the C++ World : " << name << endl;

    // char testGrade = 'A';

    // Unsigned by adding 'unsigned' prefix
    short age0 = 10;         // atleast 16-bits signed integer
    int age1 = 20;           // atleast 16-bits signed integer (not smaller than short)
    long age2 = 30;          // atleast 32-bits signed integer
    long long age3 = 40;     // atleast 64-bits signed integer

    float gpa0 = 2.5f;       // single percision floating point
    double gpa1 = 3.5;       // double-precision floating point
    long double gpa2 = 3.5;  // extended-precision floating point

    bool isTall;             // 1 bit -> true/false
    isTall = true;

return 0;

}