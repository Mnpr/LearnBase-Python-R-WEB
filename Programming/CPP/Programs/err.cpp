#include <iostream>

int main()
{
    // Un-buffered standard error stream (cerr)
    std::cerr << "An Error occured" << std::endl;
    // buffered standard error stream (clog)
    std::clog << "Another Error ocurred" << std::endl;

    return 0;
}