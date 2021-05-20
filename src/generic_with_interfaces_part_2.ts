//Spread is ES6 feature to merge objects
//Big "T" is a default name for generic

const adddddId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16);
    return{
        ...obj,
        id
    }
}

//Generic interface - different Data indise the interface
//Generic allow us to provide different data types
/****** Important: To make interface generic we add "<T>" or "<V>" after name ******/

/******~~ Passing several data types ~~******/
interface UserInterfaceppp<T, V> {
    name: string;
    data: T;
    meta: V;
}

/****** Important: We must provide genetic type if there is no default ******/
const personnnn: UserInterfaceppp<{meta: string} , string> = {
    name: "Jack",
    data: {
        meta: "foo",
    },
    meta: "bar"
}

// const personnnn2:   UserInterfaceppp<string[]> = {
//     name: "Prabath",
//     data: ["Amila","Prabath","Vidumini","Sithara"]
// }

/****** Explicit declarations are easier to read ******/
const resultttt = addddId<UserInterfacep>(personnnn);
console.log("result ", resulttt);
