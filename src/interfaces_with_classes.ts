interface UserIInterface{
    getFullName(): string;
}

class UserI implements UserIInterface{
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

const userix1 = new UserI("Amila","Kulathunga");
console.log(userx1.firstName);