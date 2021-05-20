interface UserIIIInterface{
    getFullName(): string;
}

class UserIII implements UserIIIInterface{
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

class Admin extends UserIII {
    private editor: string;

    setEditor(editor: string): void{
        this.editor = editor;
    }

    getEditor(): string{
        return this.editor;
    }
}

const useriiix1 = new UserIII("Amila","Kulathunga");
console.log(userx1.firstName);
console.log(UserII.maxAge);

const admin = new Admin("Darshana", "Kulathunga");
console.log(admin.firstName);
console.log(admin.setEditor("yes"));
console.log(admin.getEditor());