//Spread is ES6 feature to merge objects
//Big "T" is a default name for generic


const addddId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return{
        ...obj,
        id
    }
}

//Generic interface - different Data indise the interface
//Generic allow us to provide different data types
/****** Important: To make interface generic we add "<T>" or "<V>" after name ******/
interface UserInterfacepp<T> {
    name: string;
    data: T;
}

/****** Important: We must provide genetic type if there is no default ******/
const personnn: UserInterfacepp<{meta: string}> = {
    name: "Jack",
    data: {
        meta: "foo",
    }
}

const personnn2:   UserInterfacepp<string[]> = {
    name: "Prabath",
    data: ["Amila","Prabath","Vidumini","Sithara"]
}

/****** Explicit declarations are easier to read ******/
const resulttt = adddId<UserInterfacep>(personnn);
console.log("result ", resulttt);
