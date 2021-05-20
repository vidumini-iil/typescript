/****** Important: Enum - a reserved word to create enumerable ******/
/****** Important: Enum is a Data type ******/

/*
const statuss = {
    notStarted: 0,
    inProgress: 1,
    done: 2.
}

console.log(statuss.inProgress);
*/

//Names with capital letter is adefault code style
/******~~ Importance: Values are with "=" sign ~~******/
//Asign values to our Statuss enum
enum StatusssEnum {
    NotStarted = 'notStarted',
    InProgress = 'inProgress',
    Done = 'done',
}

interface Task{
    id: string;
    status: StatusssEnum;
}

console.log(StatusssEnum.InProgress); // Ptint 'inProgress' **** Not '1' **** 
/******~~ Importance of Enum: We can use enum as a value and a data type ~~******/

/****** Important: Status as both data type and value ******/
let notStartedStatussss: StatusssEnum = StatusssEnum.NotStarted;
//notStartedStatus = "foo";
notStartedStatussss = StatusssEnum.Done;