//-----------------------------------
//  Interface declaration with class
//-----------------------------------

// Explicit description
interface User {
    name: string;
    id: number;
};


class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id:number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount("Sally", 1);

console.log(user.name);


// Use Interface to annotate ${x} to functions:
//-------------------------------------------

// x. Return Values
function getAdminUser(): User {
    // ...
}

// x. Parameters 
function deleteUser( user: User) {
    // ...
}