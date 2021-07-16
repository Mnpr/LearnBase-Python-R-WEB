#include <iostream>

using std::string;

class AbstractEmployee {

    // virtual function
    virtual void RequestPromotion() = 0;
};

class Employee:AbstractEmployee {

    // member variables
    private:
        string Company;
        int Age;

    protected:
        string Name;

    public:

        // Constructor
        // ---------------------------------------------------
        Employee( string name, string company, int age) {
            Name = name;
            Company = company;
            Age = age;
        }

        // member functions
        // ---------------------------------------------------
        void Introduction() {
            std::cout << "Hello " << Name << " From " << Company << std::endl;
        }

        virtual void Work() {
            std::cout << Name << " is working on tasks " << std::endl;
        }

        // Get and Set [ Encapsulation ]
        // ---------------------------------------------------
        void setName( string name ) {
            Name = name;
        }

        string getName() {
            return Name;
        }

        void setCompany( string company ) {
            Company = company;
        }

        string getCompany() {
            return Company;
        }

        void setAge( int age ) {
            if (age >= 18 and age <= 80)
                Age = age;
            else
                std::cout<<"Not eligible to work"<< std::endl;
        }

        int getAge() {
            return Age;
        }

        // Virtual function implementation from abstract class
        // ---------------------------------------------------
        void RequestPromotion() {
            if(Age > 35)
                std::cout<< Name << " got promoted " << std::endl;
            else
                std::cout << Name << " needs more experience for promotion" << std::endl;
        }
};


// Class Developer Inherits Employee
// ---------------------------------------------------
class Developer : public Employee {
    
    public:
        string FavLanguage;

        // Constructor
        // ---------------------------------------------------
        Developer( string name, string company, int age, string favLanguage) : Employee(name, company, age)
        {
            FavLanguage = favLanguage;
        }

        // additional member function
        void Learn() {
            std::cout << Name << " loves " << FavLanguage << std::endl;
        }

        // 
        void Work() {
            std::cout << Name << " is coding in " << FavLanguage << std::endl;
        }

};

// Class Instructor Inherits Employee
// ---------------------------------------------------

class Instructor : public Employee {

    public:
        string Subject;
        
        // Constructor  
        Instructor( string name, string company, int age, string subject )
            : Employee(name, company, age) 
        {
            Subject = subject;
        }

        // member function
        void Lessons() {
            std::cout << Name << " is preparing " << Subject << " lessons." << std::endl;
        }

        void Work() {
            std::cout << Name << " is teaching " << Subject  << std::endl;
        }
};


int main()
{   
    // Object instantiation from class
    Employee new1 = Employee( "Franky", "research company", 26 );
    Employee new2 = Employee( "Bryan", "engineering company", 40 );

    // accessing member functions
    std::cout<< "------------------------------------" << std::endl;
    new1.Introduction();
    new2.Introduction();

    // modify private member variables through get and set methods
    new1.setName("Zoro");
    new1.setAge(19);

    std::cout<< "------------------------------------" << std::endl;
    std::cout << "Employee : " << new1.getName() << " who works in " << new1.getCompany() << std::endl;
    std::cout << "Age: " << new1.getAge() << " years old." << std::endl;

    // accessing abstract 
    std::cout<< "------------------------------------" << std::endl;
    new1.RequestPromotion();
    new2.RequestPromotion();

    // class with inheritance 
    // ---------------------------------------------------
    std::cout<< "------------------------------------" << std::endl;
    Developer d1 = Developer( "Sudesh", "None", 26, "Elm" );
    d1.Learn();
    // accessed using public inheritance 
    d1.RequestPromotion();
    // overriding base class method
    d1.Work();

    std::cout<< "------------------------------------" << std::endl;
    Instructor i1 = Instructor("Andrew", "deeplearning.ai", 50, "Deep Learning");
    i1.Lessons();
    // overriding base class method
    i1.Work();

    std::cout<< "------------------------------------" << std::endl;
    Employee* e1 = &d1;
    Employee* e2 = &i1;

    e1->Work();
    e2->Work();

    std::cout<< "------------------------------------" << std::endl;


}

