#include <iostream>

// Function pass by value
void fun(int x)
{
    x = 30;
}

// Function pass by reference
void cool( int *ptr) 
{
    *ptr = 30;
}

int main() 
{
    int x = 20;

    fun( x );
    std::cout << "pass parameter by value | x : " << x << std::endl;

    cool( &x );
    std::cout << "pass parameter by reference | x : " << x << std::endl;

    return 0;    
}