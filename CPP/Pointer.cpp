# include <iostream>
# include <string>

using namespace std;

int main()
{
    int num = 10;

    //// Address @Memory
    cout << &num << endl; 

    int *pNum = &num;
    cout << pNum << endl;
    
    // Value @Address
    cout << *pNum << endl;

return 0;

}