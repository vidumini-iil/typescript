const doSomething1 = ():void => {
    console.log("Do something");
}

//never something will never happen
const doSomething2 = ():never => {
    throw "never";
}