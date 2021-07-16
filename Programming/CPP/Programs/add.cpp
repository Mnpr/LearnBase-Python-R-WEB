#include <iostream>

int max(int x, int y) 
{
    if(x > y)
        return x;
    else
        return y;
}

int main() {
    int a = 10, b = 9;
    int m = max(a, b);

    std::cout << "Max Value : " << m << std::endl;

    return 0;
}