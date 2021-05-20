let varibaleAny: any = 10;

//Can't directly assign for other types
let vUnkown: unknown = 10;

let s1: string = varibaleAny;
console.log(varibaleAny.foo());
/*
let s2: string = vUnkown;
console.log(vUnkown.foo());
*/


/********** Important: As data types **********/
let s2: string = vUnkown as string;
let PageNumberL: string = "1";
let numericPageNumber: number = (PageNumberL as unknown) as number;
