//Access Modifiers: public, private, protected
//Private means that we can use it only inside a class
//Protected is allowed in class and it's children
//readonly - Unchangable names - Read only property

class User {
    public firstName: string;
    private lastName: string;
    readonly unchangabaleNames: string;

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangabaleNames = firstName;
    }

    changeUnchangableNAme():void{
        // this.unchangabaleNames = "foo";
    }

    getFullName(): string{
        return this.firstName + " " + this.lastName + " Welcome to TypeScript";
    }
}

const userx1 = new User("Amila","Kulathunga");
console.log(userx1.firstName);