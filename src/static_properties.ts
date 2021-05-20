interface UserIIInterface{
    getFullName(): string;
}

class UserII implements UserIIInterface{
    public firstName: string;
    private lastName: string;
    readonly unchangabaleNames: string;
    static readonly maxAge = 50;

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

const useriix1 = new UserII("Amila","Kulathunga");
console.log(userx1.firstName);
console.log(UserII.maxAge);