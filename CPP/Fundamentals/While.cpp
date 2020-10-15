# include <iostream>
# include <string>

using namespace std;

int main()
{
    int index = 1;

    while(index <= 5){
        cout << index << endl;
        index++;
    }

    do
    {
        cout << index << endl;
        index++;
    } while (index <= 5);
    

return 0;

}


/*
for(int i=0; i<5; i++){
    cout << i << endl;
}
*/