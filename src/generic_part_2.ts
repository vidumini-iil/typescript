//Spread is ES6 feature to merge objects
//Big "T" is a default name for generic


const adddId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return{
        ...obj,
        id
    }
}

interface UserInterfacep {
    name: string
}

const personn: UserInterfacep = {
    name: "Jack"
}

const xname = "Vidumini";

/****** Explicit declarations are easier to read ******/
const resultt = adddId<UserInterfacep>(personn);
console.log("result ", resultt);
