/** 
//object
const user: {name: string, age: number} = {
    name: "darshana",
    age: 35,
};

const user2: {name: string, age: number}  = {
    name: "Jack",
}
**/ 

/* 
IUser
UserInterface
*/

//Interfaces
interface UserInterface{
    name: string,
    age: number,
    town?: string,
    getMessage(): string,
};

const user: UserInterface = {
    name: "Amila",
    age: 32,
    town: "Galle",
    getMessage(){
        return "Hello " + name;
    }
};

const user2: UserInterface = {
    name: "Darshana",
    age: 35,
    getMessage(){
        return "I love Typescript";
    }
};

console.log(user.name);
console.log(user.getMessage);
console.log(user2.getMessage);