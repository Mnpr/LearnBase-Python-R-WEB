# include <iostream>
# include <string>

using namespace std;

// Abstract Classes and Attributes
class Vehicle{
     public:
          virtual void move() = 0; // Virtual attribute
          void getDescription(){
               cout << "Vehicles are used for transportation" << endl;
          }
};

class Bicycle : public Vehicle{
     public:
          void move(){
               cout << "The bicycle pedals forward" << endl;
          }
};

class Plane : public Vehicle{
     public:
          virtual void move(){
               cout << "The plane flys through the sky" << endl;
          }
};

int main() 
{
    Plane myPlane;
    myPlane.move();
    myPlane.getDescription();

return 0;
}