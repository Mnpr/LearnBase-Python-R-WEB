# include <iostream>
# include <string>

using namespace std;

int addNumbers(int num1, int num2);

int main()
{
     int sum = addNumbers(4,9);
     cout << "SUM :" << sum << endl;

return 0;

}

int addNumbers(int num1, int num2) {
    return num1 + num2;
}