//Spread is ES6 feature to merge objects
//Big "T" is a default name for generic

const addId = <T>(obj: T) => {
    const id = Math.random().toString(16);
    return{
        ...obj,
        id
    }
}

interface UserInterfacep {
    name: string
}

const person: UserInterfacep = {
    name: "Jack"
}

/****** Important: Explicit declarations are easier to read ******/
const result = addId<UserInterfacep>(person);
console.log("result ", result);
