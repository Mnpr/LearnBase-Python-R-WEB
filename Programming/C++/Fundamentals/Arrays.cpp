# include <iostream>
# include <string>

using namespace std;

int main()
{
    // 1D Array : int luckyNumbers[6];
    int luckyNumbers[] = {4, 8, 15, 16, 23, 42};
    //        indexes:    0  1  2   3   4   5

    luckyNumbers[0] = 90;
    cout << luckyNumbers[0] << endl;
    cout << luckyNumbers[1] << endl;

    // 2D Array : int  numberGrid[2][3];
    int numberGrid[2][3] = { {1, 2, 3}, {4, 5, 6} };
    numberGrid[0][1] = 99;

    cout << numberGrid[0][0] << endl;
    cout << numberGrid[0][1] << endl;

return 0;

}