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
;
var user = {
    name: "Amila",
    age: 32,
    town: "Galle",
    getMessage: function () {
        return "Hello " + name;
    }
};
var user2 = {
    name: "Darshana",
    age: 35,
    getMessage: function () {
        return "I love Typescript";
    }
};
console.log(user.name);
console.log(user.getMessage);
console.log(user2.getMessage);
