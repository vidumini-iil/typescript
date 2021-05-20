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
enum Status {
    NotStarted,
    InProgress,
    Done,
}

console.log(Status.InProgress); // Ptint 1 --> The value are incremented from zero
/******~~ Importance of Enum: We can use enum as a value and a data type ~~******/

/****** Important: Status as both data type and value ******/
let notStartedStatus: Status = Status.NotStarted;
//notStartedStatus = "foo";
notStartedStatus = Status.Done;